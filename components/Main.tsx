"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import { useRef } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

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
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-full text-center ${greatVibes.className}`}
          style={{ bottom: 140 }}
        >
          <p className="text-[70px] leading-[1.05] text-[#118b50] drop-shadow-sm">
            Happy
          </p>
          <p className="mt-1 text-[70px] leading-[1.05] text-[#118b50] drop-shadow-sm">
            Wedding day
          </p>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 w-[86%] max-w-[420px] text-center"
          style={{ bottom: 56 }}
        >
          <div className="grid grid-cols-3 items-center">
            <span className="text-sm font-semibold tracking-wide text-[#118b50]">
              김관휘
            </span>
            <span className="text-sm font-semibold tracking-widest text-[#118b50]">
              2025. 12. 27.
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#118b50]">
              유나영
            </span>
          </div>

          {/* 아주 작은 캡션 (옵션) */}
          <p className="mt-3 text-[7px] leading-[1.2] text-[#118b50]">
            We met by chance, but stayed by choice, learning that real love
            means choosing each other every day. Today marks the start of a
            lifelong promise, our hearts set on a future filled with hope and
            laughter. Now we are ready to write the next chapter—together.
          </p>
        </div>
      </div>
    </section>
  );
}
