"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 자식 간 등장 간격 ↑ (0.08 → 0.2)
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
      ease: [0.25, 1, 0.3, 1],
    },
  },
};

export default function BtypeInvitation() {
  return (
    <div className="bg-[#F5F9F5] flex flex-col items-center justify-center px-6 py-12 text-center text-gray-800">
      {/* ── 1) 상단 타이틀: 35%에서 재생 ─────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }} // 더 이르게(35%) 트리거
      >
        <motion.div variants={fadeUp}>
          <p className="text-[14px] tracking-[0.25em] text-[#b5cda4] mb-2">
            INVITATION
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="text-[24px] font-semibold mb-10">
            소중한 분들을 초대합니다
          </h1>
        </motion.div>
      </motion.div>

      {/* ── 2) 본문 1: 70%에서 재생(조금 늦게) ───────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }} // 더 늦게(70%) 트리거
        className="space-y-1 leading-relaxed text-base"
      >
        <motion.div variants={fadeUp}>
          <p>두 사람이 하나가 될 새 인생을 시작합니다.</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p>사랑으로 가득 채워</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p>즐거움은 나누고 어려움은 이겨내는</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p>함께 나아가는 삶을 꾸리겠습니다.</p>
        </motion.div>
      </motion.div>

      {/* ── 3) 본문 2: 80%에서 재생(더 늦게) ────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }} // 80%에서 트리거
        className="space-y-1 leading-relaxed text-base mt-8"
      >
        <motion.div variants={fadeUp}>
          <p>언제나 저희 곁에 있어주신 소중한 분들과</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p>함께 첫 시작을 내딛고 싶습니다.</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p>특별하고 의미있는 하루에 함께하시어</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p>저희의 시작을 축복해주세요.</p>
        </motion.div>
      </motion.div>

      {/* ── 4) 신랑·신부: 90%에서 재생(가장 늦게) ──────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.9 }} // 90%에서 트리거
        className="mt-12 text-base leading-relaxed space-y-2"
      >
        <motion.div variants={fadeUp} className="flex ">
          <p className="w-[65px]">김태성</p>
          <p className="w-[15px]"> · </p>
          <p className="w-[65px]">유명옥</p>
          <p className="w-[85px] text-left">
            의<span className="ml-[12px] ">장남</span>
          </p>
          <p className="font-semibold ml-2 text-[17px]">김관휘</p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex ">
          <p className="w-[65px]">유영근</p>
          <p className="w-[15px]"> · </p>
          <p className="w-[65px]">박순덕</p>
          <p className="w-[85px] text-left">
            의<span className="ml-[12px] ">차녀</span>
          </p>
          <p className="font-semibold ml-2 text-[17px]">유나영</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
