"use client";

import { motion, type Variants } from "framer-motion";

export default function WeddingDay() {
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
      viewport={{ once: true, amount: 0.65 }}
      className="bg-white py-[50px] flex flex-col items-center text-center text-gray-800"
    >
      <motion.div variants={fadeUp} className="mb-10">
        <p className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2">
          WEDDING DAY
        </p>

        {/* 날짜 및 장소 */}
        <div className="mb-6">
          <p className="text-lg font-medium mb-1">
            2025.12.27. 토요일 오전 11:20
          </p>
          <p className="text-base font-medium text-gray-700">
            더베뉴지서울 1층 네이처홀
          </p>
        </div>
      </motion.div>

      {/* 구분선 */}
      <div className="w-full max-w-[320px] border-t border-gray-200 my-6" />

      {/* 달력 */}
      <motion.div variants={fadeUp} className="text-center w-[60%]">
        <div className="grid grid-cols-7 gap-1 mb-4 text-[13px] font-semibold items-center">
          <span className="text-red-500">S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        <div className="grid grid-cols-7 gap-y-5 text-[14px] items-center">
          {[
            "",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
          ].map((day, i) =>
            day === "27" ? (
              <div
                key={i}
                className="w-8 h-8 text-[80%] flex items-center justify-center mx-auto rounded-full bg-[#D86343] text-white font-medium"
              >
                {day}
              </div>
            ) : (
              <div
                key={i}
                className={`text-gray-800 text-[80%] ${
                  i % 7 === 0 && day ? "text-red-500" : ""
                }`}
              >
                {day}
              </div>
            )
          )}
        </div>
      </motion.div>

      {/* 하단 구분선 */}
      <div className="w-full max-w-[320px] border-t border-gray-200 mt-6" />
    </motion.section>
  );
}
