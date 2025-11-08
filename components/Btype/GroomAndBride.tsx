"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export default function BtypeGroomAndBride() {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }} // 섹션의 35%가 보이면 실행, 한 번만
      className="bg-white py-[50px] px-6 text-center text-gray-800"
    >
      <motion.div variants={fadeUp} className="mb-10">
        <p className="text-[14px] tracking-[0.25em] text-[#B5CDA4] mb-2">
          GROOM & BRIDE
        </p>
        <h2 className="text-[24px] font-semibold ">신랑 & 신부를 소개합니다</h2>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-4 grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/groom.jpeg"
              alt="groom parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-10 text-[16px] mb-16">
            <span className="text-[#B5CDA4] font-medium mr-2.5">신랑</span>
            <span className="text-gray-700 text-[18px] font-semibold">
              김관휘
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/bride.jpeg"
              alt="bride parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-10 text-[16px] mb-16">
            <span className="text-[#ff957a] font-medium mr-2.5">신부</span>

            <span className="text-gray-700 text-[18px] font-semibold">
              유나영
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
