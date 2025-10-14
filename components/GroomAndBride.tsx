"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function GroomAndBride() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ 특정 스크롤 지점에서 상태 전환
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.15 && !showGroom) setShowGroom(true); // 신랑 전환 트리거
    if (v > 0.25 && !showBride) setShowBride(true); // 신부 전환 트리거
  });

  return (
    <section
      ref={ref}
      className="relative h-[170vh] bg-white text-center text-gray-800 py-[50px]"
    >
      {/* ✅ 고정 콘텐츠 영역 */}
      <div className="sticky top-[35px] h-[110vh] overflow-hidden px-6">
        <p className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2">
          GROOM & BRIDE
        </p>
        <h2 className="text-xl font-semibold mb-4">신랑 & 신부 소개</h2>
        <div className="text-base leading-relaxed text-gray-700 mb-10">
          <p>그날의 신랑신부를 소개합니다</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 relative min-h-[83vh]">
          {/* === 신랑 === */}
          <div className="relative">
            <motion.div
              animate={{ opacity: showGroom ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 w-full  flex flex-col items-center"
            >
              <div className="relative aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/assets/images/groom.jpeg"
                  alt="groom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-sm">
                {/* <span className="text-[#B5CDA4] font-medium">신랑</span>
                <span className="mx-1 text-gray-400">|</span> */}
                <span className="text-gray-700">김태성 · 유명옥의 아들</span>
              </div>
              <div className="mt-4">
                <span className="text-[#B5CDA4] font-medium text-sm mr-3">
                  신랑
                </span>
                <span className="mt-3 text-lg font-semibold text-gray-800">
                  김관휘
                </span>
              </div>
            </motion.div>

            {/* 신랑 부모님 */}
            <motion.div
              animate={{ opacity: showGroom ? 0 : 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 w-full  flex flex-col items-center"
            >
              <div className="relative aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/assets/images/groomParents.jpeg"
                  alt="groom parents"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-sm">
                <span className="text-[#B5CDA4] font-medium">신랑</span>
                <span className="mx-1 text-gray-400">|</span>
                <span className="text-gray-700">관휘의 부모님</span>
              </div>
              <div className="mt-3 text-lg">
                <span className="font-semibold">김태성</span>
                <span className="mx-2 text-[#D86343]">❤️</span>
                <span className="font-semibold">유명옥</span>
              </div>
            </motion.div>
          </div>

          {/* === 신부 === */}
          <div className="relative">
            <motion.div
              animate={{ opacity: showBride ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute right-0 top-0 w-full  flex flex-col items-center"
            >
              <div className="relative aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/assets/images/bride.jpeg"
                  alt="bride"
                  fill
                  className="object-cover object-[center_25%]"
                />
              </div>
              <div className="mt-4 text-sm">
                {/* <span className="text-[#D86343] font-medium">신부</span> */}
                {/* <span className="mx-1 text-gray-400">|</span> */}
                <span className="text-gray-700">유영근 · 박순덕의 딸</span>
              </div>
              <div className="mt-4">
                <span className="text-[#D86343] font-medium text-sm mr-3">
                  신부
                </span>
                <span className="mt-3 text-lg font-semibold text-gray-800">
                  유나영
                </span>
              </div>
            </motion.div>

            {/* 신부 부모님 */}
            <motion.div
              animate={{ opacity: showBride ? 0 : 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute right-0 top-0 w-full  flex flex-col items-center"
            >
              <div className="relative aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/assets/images/brideParents.jpeg"
                  alt="bride parents"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-sm">
                <span className="text-[#D86343] font-medium">신부</span>
                <span className="mx-1 text-gray-400">|</span>
                <span className="text-gray-700">나영의 부모님</span>
              </div>
              <div className="mt-3 text-lg">
                <span className="font-semibold">유영근</span>
                <span className="mx-2 text-[#D86343]">❤️</span>
                <span className="font-semibold">박순덕</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
