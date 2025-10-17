"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function GroomAndBride() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end start"],
  });

  // 히스테리시스 임계치 (내려갈 때/올라갈 때 분리)
  const GROOM_ENTER = 0.4; // 이 값 이상 내려가면 신랑(자녀) ON
  const GROOM_EXIT = 0.37; // 이 값 미만 올라가면 신랑(자녀) OFF → 부모님 ON
  const BRIDE_ENTER = 0.45;
  const BRIDE_EXIT = 0.42;

  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // 신랑 토글
    if (!showGroom && p >= GROOM_ENTER) setShowGroom(true);
    else if (showGroom && p <= GROOM_EXIT) setShowGroom(false);

    // 신부 토글
    if (!showBride && p >= BRIDE_ENTER) setShowBride(true);
    else if (showBride && p <= BRIDE_EXIT) setShowBride(false);
  });

  const container: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3.2,
        ease: [0.16, 1, 0.3, 1], // 부드러운 easeOut
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      ref={ref}
      className="relative  text-center text-gray-800 py-[50px]"
    >
      <div className=" h-[450px] overflow-hidden px-6">
        <motion.div variants={fadeUp}>
          <p className="text-[14px] tracking-[0.25em] text-[#B5CDA4] mb-2 font-[EBGaramond]">
            GROOM & BRIDE
          </p>
          <h2 className="text-[18px] font-semibold mb-4">신랑 & 신부 소개</h2>
        </motion.div>

        <div className="text-[16px] leading-relaxed text-gray-700 mb-10">
          <motion.p variants={fadeUp}>
            누구보다 멋있고 아름다
            <motion.span
              key={showGroom || showBride ? "future" : "past"} // key가 달라야 애니메이션 트리거됨
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {showGroom || showBride ? "울" : "웠던"}
            </motion.span>
          </motion.p>
          <motion.p variants={fadeUp}>그날의 신랑신부를 소개합니다</motion.p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 relative  gap-2">
          {/* === 신랑 === */}
          <div className="relative">
            <motion.div
              animate={{ opacity: showGroom ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 w-full  flex flex-col items-center"
            >
              <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/assets/images/groom.jpeg"
                  alt="groom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-sm">
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
              <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
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
                <span className="mx-2 text-[#D86343]">
                  <Heart className=" w-4 h-4 inline text-[#ff957a] fill-[#ff957a]" />
                </span>
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
              <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/assets/images/bride.jpeg"
                  alt="bride"
                  fill
                  className="object-cover object-[center_25%]"
                />
              </div>
              <div className="mt-4 text-sm">
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
              <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
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
                <span className="mx-2 text-[#D86343]">
                  <Heart className=" w-4 h-4 inline text-[#ff957a] fill-[#ff957a]" />
                </span>
                <span className="font-semibold">박순덕</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
