"use client";

import {
  useScroll,
  useMotionValueEvent,
  motion,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function MidImageCanvas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 시퀀스 설정
  const TOTAL = 20; // 프레임 수
  const START_NO = 1641; // 시작 번호 (파일명 끝 숫자)
  const SPEED = 3.0; // 스크롤 대비 프레임 민감도

  // 프레임 버퍼 & 상태 (ref로 관리해 리렌더 방지)
  const framesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const readyRef = useRef(false);
  const drawingIndexRef = useRef(-1);

  // framer-motion: 해당 구간에서만 진행도 추적
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 텍스트 오버레이 애니메이션(원 코드 유지)
  const titleOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.0, 0.22], [24, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.04, 0.28], [18, 0]);

  // 프레임 소스 경로
  const getSrc = (idx: number) => {
    const no = String(START_NO + idx).padStart(5, "0");
    return `/assets/images/waltz/cropped/YOU${no}.JPG`;
  };

  // 캔버스 크기(DPR) 갱신
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // 한 프레임 그리기 (cover 비율 유지)
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = framesRef.current[idx];
    if (!canvas || !ctx || !img) return;

    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    // cover 계산
    const ir = img.width / img.height;
    const cr = cw / ch;
    let dw = cw;
    let dh = ch;
    if (ir > cr) {
      // 이미지가 더 납작 → 세로 기준
      dh = ch;
      dw = dh * ir;
    } else {
      // 이미지가 더 세로 → 가로 기준
      dw = cw;
      dh = dw / ir;
    }
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, dx, dy, dw, dh);
    drawingIndexRef.current = idx;
  };

  // 프레임 전부 프리로드 (용량이 무거우면 근접 프리로드로 바꾸세요)
  useEffect(() => {
    framesRef.current = new Array(TOTAL);
    loadedCountRef.current = 0;
    readyRef.current = false;

    for (let i = 0; i < TOTAL; i++) {
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = getSrc(i);
      img.onload = () => {
        loadedCountRef.current += 1;
        // 최초 로드 시 캔버스 초기화 & 0프레임 그리기
        if (!readyRef.current && loadedCountRef.current >= 1) {
          resizeCanvas();
          drawFrame(0);
        }
        if (loadedCountRef.current === TOTAL) {
          readyRef.current = true;
        }
      };
      framesRef.current[i] = img;
    }

    // 리사이즈/회전 대응
    const ro = new ResizeObserver(() => {
      const last = Math.max(0, drawingIndexRef.current);
      resizeCanvas();
      drawFrame(last);
    });
    if (canvasRef.current?.parentElement) {
      ro.observe(canvasRef.current.parentElement);
    }

    const onVis = () => {
      if (document.visibilityState === "visible") {
        resizeCanvas();
        drawFrame(Math.max(0, drawingIndexRef.current));
      }
    };
    document.addEventListener("visibilitychange", onVis, { passive: true });

    return () => {
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      // 이미지 객체 정리 (브라우저가 GC하지만 참조도 해제)
      framesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 스크롤 변화 → 프레임 그리기 (상태 업데이트 없이 rAF로 캔버스만 갱신)
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(TOTAL - 1, Math.round(p * SPEED * TOTAL));
    if (next === drawingIndexRef.current) return;
    // 프레임이 일부만 로드된 상태에서도 느리게라도 그리기 시도
    requestAnimationFrame(() => drawFrame(next));
  });

  // 첫 마운트 시 캔버스 사이즈 세팅
  useEffect(() => {
    resizeCanvas();
    // iOS에서 주소창 높이 변화 등으로 레이아웃 변동이 잦음 → 약한 지연 후 재확인
    const t = setTimeout(resizeCanvas, 100);
    return () => clearTimeout(t);
  }, []);

  // sticky 섹션 높이
  const sectionStyle = useMemo(() => "relative h-[1500px] bg-white", []);

  return (
    <section ref={sectionRef} className={sectionStyle}>
      <div className="sticky top-10 h-screen w-full overflow-hidden">
        {/* 캔버스에 프레임을 그립니다 */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block w-full h-[720px] [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform"
          aria-label="scroll sequence"
        />

        {/* 상/하 그라데이션 마스크 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px] bg-gradient-to-t from-transparent to-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-b from-transparent to-white" />

        {/* 오버레이 텍스트 (원 코드 유지) */}
        <div className="absolute inset-0 flex flex-col items-center top-10 text-center">
          <motion.h2
            style={{
              opacity: titleOpacity,
              y: titleY,
              willChange: "opacity, transform",
            }}
            className={`text-[52px]  text-[#d27096] italic tracking-wide font-medium ${greatVibes.className}`}
          >
            Waltz of Love
          </motion.h2>
          <motion.p
            style={{
              opacity: subOpacity,
              y: subY,
              willChange: "opacity, transform",
            }}
            className="mt-4 text-[12px] text-[#d27096] "
          >
            천천히 내려보세요 신랑 신부가 춤을 춰요
          </motion.p>
        </div>
      </div>
    </section>
  );
}
