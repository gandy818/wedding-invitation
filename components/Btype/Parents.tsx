"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function BtypeParents() {
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
          OUR PARENTS
        </p>
        <h2 className="text-[24px] font-semibold mb-4">우리의 부모님</h2>

        <div className="text-lg leading-relaxed text-gray-700">
          <p>저희의 시작을 사랑으로 응원해주신</p>
          <p>양가 부모님을 소개합니다.</p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mx-auto grid max-w-4xl grid-cols-1 gap-8 xxs:grid-cols-2"
      >
        <div className="flex flex-col items-center">
          <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/groomParents.jpeg"
              alt="groom parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-4 text-[14px] xs:text-[18px]">
            <span className="text-[#B5CDA4] font-medium">신랑</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-700 ">관휘의 부모님</span>
          </div>

          <div className="mt-3 text-[18px] xs:text-[20px] mb-16">
            <span className="font-semibold">김태성</span>
            <span className="mx-2">
              <Heart className=" w-4 h-4 inline text-[#ff957a] fill-[#ff957a]" />
            </span>
            <span className="font-semibold">유명옥</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/brideParents.jpeg"
              alt="bride parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-4 text-[14px] xs:text-[18px]">
            <span className="text-[#ba7d60] font-medium">신부</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-700">나영의 부모님</span>
          </div>

          <div className="mt-3 text-[18px] xs:text-[20px] mb-16">
            <span className="font-semibold">유영근</span>
            <span className="mx-2">
              <Heart className=" w-4 h-4 inline text-[#ff957a] fill-[#ff957a]" />
            </span>
            <span className="font-semibold">박순덕</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
