"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import hall from "@/public/assets/images/hall.jpeg";
import atm from "@/public/assets/images/atm.png";
import buffet from "@/public/assets/images/buffet.png";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

type TabId = "buffet" | "atm" | "dress";

const TABS: { id: TabId; label: string }[] = [
  { id: "buffet", label: "연회장" },
  { id: "atm", label: "편의시설" },
  { id: "dress", label: "복장안내" },
];

export default function BtypeInfomation() {
  const [active, setActive] = useState<TabId>("buffet");
  const activeIndex = useMemo(
    () => TABS.findIndex((t) => t.id === active),
    [active]
  );
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (idx: number) => {
    swiperRef.current?.slideTo(idx);
  };

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
      viewport={{ once: false, amount: 0.35 }}
      className="bg-white py-[50px] px-4 text-gray-800 h-[725px]"
    >
      <motion.div variants={fadeUp} className="text-center">
        <p className="text-[14px] tracking-[0.25em] text-[#B5CDA4] mb-2 font-[EBGaramond]">
          INFORMATION
        </p>
        <h2 className="text-[18px] font-semibold">안내 말씀드립니다</h2>
      </motion.div>

      <div className="mx-auto mt-10 max-w-4xl">
        <div
          role="tablist"
          aria-label="안내 탭"
          className="relative grid grid-cols-3 items-center border-b border-gray-200"
        >
          {TABS.map((t, idx) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => goTo(idx)}
              className={[
                "h-12 text-center text-[16px] transition-colors cursor-pointer",
                active === t.id
                  ? "text-[#6f8570] font-semibold"
                  : "text-gray-400",
              ].join(" ")}
            >
              {t.label}
            </button>
          ))}

          <span
            className="pointer-events-none absolute bottom-[-1px] left-0 h-[3px] w-1/3 bg-[#6f8570] transition-transform duration-300"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
        </div>

        {/* 패널 */}
        <div className="pt-6">
          <Swiper
            onSwiper={(sw) => (swiperRef.current = sw)}
            onSlideChange={(sw) => {
              const newIdx = sw.activeIndex ?? 0;
              const newTab = TABS[newIdx]?.id ?? "buffet";
              setActive(newTab);
            }}
            initialSlide={activeIndex}
            autoHeight
            spaceBetween={0}
          >
            {/* 연회장 */}
            <SwiperSlide
              aria-labelledby="tab-buffet"
              id="panel-buffet"
              role="tabpanel"
            >
              <Image
                src={buffet}
                alt="연회장 안내 이미지"
                className="h-[300px] w-full object-cover"
                priority
              />
              <ul className="mt-6 leading-8 text-left ml-5 text-[14px]">
                <li className="list-disc">
                  연회장은 지하 1층에 있습니다. 에스컬레이터를 이용하시면 더욱
                  편리하게 이동하실 수 있습니다.
                </li>
                <li className="list-disc">
                  음료와 주류가 무제한이니 마음껏 즐겨주세요.
                </li>
              </ul>
            </SwiperSlide>

            {/* 편의시설 */}
            <SwiperSlide
              aria-labelledby="tab-atm"
              id="panel-atm"
              role="tabpanel"
            >
              <Image
                src={atm}
                alt="편의시설 이미지"
                className="h-[300px] w-full object-cover"
                priority
              />
              <ul className="mt-6 leading-8 text-left ml-5 text-[14px]">
                <li className="list-disc">
                  1층 로비 2게이트 앞에 국민은행과 하나은행 ATM이 마련되어
                  있습니다.
                </li>
                <li className="list-disc">
                  동시 주차 1,200대의 주차공간이 있으니 마음 편히 오셔서 축하해
                  주세요. 무료주차는 2시간 적용됩니다.
                </li>
              </ul>
            </SwiperSlide>

            {/* 복장안내 */}
            <SwiperSlide
              aria-labelledby="tab-dress"
              id="panel-dress"
              role="tabpanel"
            >
              <Image
                src={hall}
                alt="복장 안내 이미지"
                className="h-[300px] w-full object-cover"
                priority
              />
              <ul className="mt-6 leading-8 text-left ml-5 text-[14px]">
                <li className="list-disc">
                  밝은 옷도 어울리는 홀입니다. 부담 갖지 마시고 편안한 차림으로
                  참석해주세요.
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
