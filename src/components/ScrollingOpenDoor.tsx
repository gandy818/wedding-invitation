'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 216; // 00000 ~ 00215

// 파일 경로 생성 (public/images/wood_door/250429_00000.jpg ...)
const frameSrc = (i: number) => `/images/wood_door/250429_${String(i).padStart(5, '0')}.jpg`;

export default function ScrollingOpenDoor() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const stateRef = useRef({ frame: 0 });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const naturalSizeRef = useRef<{ w: number; h: number } | null>(null);

  // 캔버스에 'cover' 렌더링(화면 비율에 맞춰 잘 채우기)
  const drawCover = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const imgs = imagesRef.current;
    if (!canvas || !ctx || !imgs.length) return;
    const img = imgs[stateRef.current.frame];
    if (!img?.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    if (!iw || !ih) return;

    // cover 계산
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // 캔버스 리사이즈 (디바이스 픽셀 비율 대응)
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // 과도한 해상도 방지
    const { clientWidth, clientHeight } = canvas;
    canvas.width = Math.floor(clientWidth * dpr);
    canvas.height = Math.floor(clientHeight * dpr);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctxRef.current = ctx;
    }
    drawCover();
  };

  // 첫 프레임 렌더
  const render = () => drawCover();

  useEffect(() => {
    const canvas = canvasRef.current!;
    // Tailwind로 크기는 CSS가 담당, 실제 픽셀 사이즈는 resizeCanvas가 설정
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 이미지 미리 로드(필수 프레임만 먼저 로드 → 스크롤 중 자연스럽게 로드)
    imagesRef.current = new Array(FRAME_COUNT);
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      imagesRef.current[i] = img;
      if (i === 0) {
        img.onload = () => {
          naturalSizeRef.current = { w: img.naturalWidth, h: img.naturalHeight };
          render();
        };
      }
    }

    const target = wrapRef.current!;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: 'top top',
        end: '+=300%', // 스크롤 진행 길이
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(stateRef.current, {
      frame: FRAME_COUNT - 1,
      duration: 1,
      ease: 'none',
      onUpdate: () => {
        // 정수 프레임 스냅
        stateRef.current.frame = Math.round(stateRef.current.frame);
        render();
      },
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-[100vh]" ref={wrapRef}>
      <canvas
        ref={canvasRef}
        className="block h-full w-full bg-black"
        // CSS 사이즈: 화면 채움 → 내부 픽셀은 코드로 설정
      />
    </div>
  );
}
