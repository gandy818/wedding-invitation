"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Main() {
  const ref = useRef<HTMLDivElement>(null);

  // 섹션이 화면에 보이는 동안의 스크롤 진행도 (0~1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 스크롤 비율에 따라 이미지 페이드 전환
  const opacityMainBlack = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityMain = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} className="relative h-[1400px] bg-[#F5F9F5] ">
      {/* 실제로 고정되는 영역 */}
      <div className="sticky top-0 h-[720px] overflow-hidden">
        {/* 이미지 레이어 */}
        <motion.img
          src="/assets/images/main-black.jpeg"
          alt="main black"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ opacity: opacityMainBlack }}
        />
        <motion.img
          src="/assets/images/main.jpeg"
          alt="main"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ opacity: opacityMain }}
        />

        {/* 텍스트 영역 */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <p className="text-white text-3xl font-light tracking-wide">
            wedding day
          </p>
        </div>
      </div>
    </section>
  );
}
