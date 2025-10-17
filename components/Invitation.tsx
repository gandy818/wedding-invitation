"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 자식 간 등장 간격
      delayChildren: 0.2, // 처음 시작 약간 늦게
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 }, // y를 조금 더 크게 하면 부드럽게 떠오름
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.2,
      ease: [0.25, 1, 0.3, 1], // 좀 더 천천히 감속되는 easing
    },
  },
};

export default function Invitation() {
  return (
    <section className="bg-[#F5F9F5] flex flex-col items-center justify-center px-6 py-12 text-center text-gray-800">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }} // 35%
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm tracking-[0.25em] text-[#b5cda4] mb-2 font-[EBGaramond]">
            INVITATION
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="text-[18px] font-medium mb-10">
            소중한 분들을 초대합니다
          </h1>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }} // 70%
        className="space-y-1 leading-relaxed text-[14px]"
      >
        <motion.p variants={fadeUp}>
          두 사람이 하나가 될 새 인생을 시작합니다.
        </motion.p>
        <motion.p variants={fadeUp}>사랑으로 가득 채워</motion.p>
        <motion.p variants={fadeUp}>즐거움은 나누고 어려움은 이겨내는</motion.p>
        <motion.p variants={fadeUp}>함께 나아가는 삶을 꾸리겠습니다.</motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }} // 80%
        className="space-y-1 leading-relaxed text-base mt-8 text-[14px]"
      >
        <motion.p variants={fadeUp}>
          언제나 저희 곁에 있어주신 소중한 분들과
        </motion.p>
        <motion.p variants={fadeUp}>함께 첫 시작을 내딛고 싶습니다.</motion.p>
        <motion.p variants={fadeUp}>
          특별하고 의미있는 하루에 함께하시어
        </motion.p>
        <motion.p variants={fadeUp}>저희의 시작을 축복해주세요.</motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.9 }} // 90%에서 트리거
        className="mt-12 text-base leading-relaxed space-y-2"
      >
        <motion.div variants={fadeUp} className="flex text-[15px]">
          <p className="w-[65px]">김태성</p>
          <p className="w-[15px]"> · </p>
          <p className="w-[65px]">유명옥</p>
          <p className="w-[85px] text-left">
            의<span className="ml-[12px] ">아들</span>
          </p>
          <p className="font-semibold ml-2 text-[16px]">관휘</p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex text-[15px]">
          <p className="w-[65px]">유영근</p>
          <p className="w-[15px]"> · </p>
          <p className="w-[65px]">박순덕</p>
          <p className="w-[85px] text-left">
            의<span className="ml-[12px]">딸</span>
          </p>
          <p className="font-semibold ml-2 text-[16px]">나영</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
