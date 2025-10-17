"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";

export default function MidImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.0, 0.22], [24, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.04, 0.28], [18, 0]);

  const TOTAL = 20; // 0..19 권장
  const SPEED = 2.0;

  const [index, setIndex] = useState(0);

  // ✔ 스크롤 → index 업데이트를 rAF로 스로틀
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // rAF로 묶어서 레이아웃 스로틀
    requestAnimationFrame(() => {
      const next = Math.min(TOTAL - 1, Math.round(p * SPEED * TOTAL));
      // 동일 값이면 setState 회피 (불필요 리렌더 방지)
      setIndex((prev) => (prev !== next ? next : prev));
    });
  });

  const src = useMemo(() => {
    const num = String(1641 + index).padStart(5, "0");
    return `/assets/images/waltz/cropped/YOU${num}.JPG`;
  }, [index]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-white">
      <div className="sticky top-10 h-screen w-full overflow-hidden">
        {/* ✔ GPU 합성 레이어 승격 */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          <Image
            src={src}
            alt="scroll sequence"
            fill
            className="object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
            sizes="100vw"
            priority
          />

          {/* 상/하 그라데이션은 독립 페인트 영역으로 분리해 깜빡임 완화 */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[25vh] bg-gradient-to-t from-transparent to-white will-change-contents" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28vh] bg-gradient-to-b from-transparent to-white will-change-contents" />

          {/* <div className="absolute inset-0 flex flex-col items-center text-center">
            <motion.h2
              style={{
                opacity: titleOpacity,
                y: titleY,
                willChange: "opacity, transform",
              }}
              className="text-[42px] font-[EBGaramond] text-[#d27096] italic tracking-wide"
            >
              Our love story
            </motion.h2>
            <motion.p
              style={{
                opacity: subOpacity,
                y: subY,
                willChange: "opacity, transform",
              }}
              className="mt-4 text-[14px] text-[#d27096] font-[EBGaramond]"
            >
              OIN US IN CELEBRATING OUR WEDDING
            </motion.p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
