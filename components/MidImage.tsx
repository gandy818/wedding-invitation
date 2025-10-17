"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useRef } from "react";

export default function MidImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const TOTAL = 20; // 프레임 수 (0~22)
  const SPEED = 2.0; // ↑ 값을 키울수록 더 빨리 바뀜 (예: 1.5~2.5)

  const [index, setIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(TOTAL, Math.round(p * SPEED * TOTAL));
    if (next !== index) setIndex(next);
  });

  const src = useMemo(() => {
    const num = String(1641 + index).padStart(5, "0");
    return `/assets/images/waltz/cropped/YOU${num}.JPG`;
  }, [index]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-white">
      <div className="sticky top-10 h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0">
          <Image
            src={src}
            alt="scroll sequence"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* 상단 페이드 */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-t from-transparent to-white" />

          {/* 하단 페이드 */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[28vh] bg-gradient-to-b from-transparent to-white" />

          {/* 오버레이 텍스트 */}
          <div className="absolute inset-0 flex flex-col text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[42px] font-[EBGaramond] text-[#d27096] italic tracking-wide"
            >
              Our love story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="mt-4 text-[18px] font-medium text-[#d27096] font-[EBGaramond]"
            >
              KIM GWAN HWI &nbsp;&nbsp;&nbsp;&nbsp; YU NA YOUNG
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
