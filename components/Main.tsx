"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Main() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // 스크롤이 0일 때는 main-black, 200px 이상이면 main 으로 전환
  const opacityMainBlack = useTransform(scrollY, [0, 200], [1, 0]);
  const opacityMain = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <div ref={ref} className="relative h-[100vh] overflow-hidden">
      {/* 검정 버전 */}
      <motion.img
        src="/assets/images/main-black.jpeg"
        alt="main black"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ opacity: opacityMainBlack }}
      />
      {/* 일반 버전 */}
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

      {/* 어두운 오버레이 (원하면 추가) */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}
    </div>
  );
}
