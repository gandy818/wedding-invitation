"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useRef } from "react";

export default function MidImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 스크롤에 따른 오버레이 텍스트 페이드/이동
  // (구간은 취향에 맞게 조정: 0.08~0.22 사이에서 서서히 나타남)
  const titleOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.0, 0.22], [24, 0]);

  const subOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.04, 0.28], [18, 0]);

  const TOTAL = 20;
  const SPEED = 2.0;

  const [index, setIndex] = useState(0);
  // NOTE: mount 애니메이션 제거하고 스크롤 기반만 사용
  scrollYProgress.on("change", (p) => {
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

          {/* 상단/하단 페이드 */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-t from-transparent to-white" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[28vh] bg-gradient-to-b from-transparent to-white" />

          {/* 오버레이 텍스트 (스크롤 시 서서히 등장) */}
          <div
            className="absolute inset-0 flex flex-col items-center 
          top-15 text-center"
          >
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
