"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import AccountItem from "./AccountItem";
import { ChevronDown, Heart } from "lucide-react";

export default function BtypeAccount() {
  const hostInfo = [
    {
      host: "신랑측",
      accountInfo: [
        {
          relation: "신랑",
          name: "김관휘",
          bank: "국민은행",
          account: "46190101148217",
        },
        {
          relation: "혼주",
          name: "김태성",
          bank: "케이뱅크",
          account: "100163904831",
        },
        {
          relation: "혼주",
          name: "유명옥",
          bank: "토스뱅크",
          account: "100010131779",
        },
      ],
    },
    {
      host: "신부측",
      accountInfo: [
        {
          relation: "신부",
          name: "유나영",
          bank: "국민은행",
          account: "29320204280097",
        },
        {
          relation: "혼주",
          name: "유영근",
          bank: "농협은행",
          account: "21701652088202",
        },
        {
          relation: "혼주",
          name: "박순덕",
          bank: "농협은행",
          account: "19812142176",
        },
      ],
    },
  ];

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

  const Accordion = ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((v) => !v);

    const isGroom = title.includes("신랑");
    const colorSet = isGroom
      ? {
          border: "border-[#d0d3cb]",
          bg: "bg-[#edeeeb]",
          text: "text-[#5B6E4D]",
          icon: "text-[#5B6E4D]",
        }
      : {
          border: "border-[#e4d7d2]",
          bg: "bg-[#f3edeb]",
          text: "text-[#815B4E]",
          icon: "text-[#815B4E]",
        };

    // 펼쳐질 때 자식 항목들이 순차적으로 살짝 떠오르는 연출
    const listContainer: Variants = {
      open: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
      collapsed: {},
    };
    const item: Variants = {
      open: { opacity: 1, y: 0, transition: { duration: 0.25 } },
      collapsed: { opacity: 0, y: 6, transition: { duration: 0.2 } },
    };

    return (
      // layout: 아코디언 열고 닫을 때 주변 요소와의 레이아웃을 자연스럽게
      <motion.div
        layout
        className={`rounded-lg mb-5 overflow-hidden transition-all border ${colorSet.border}`}
      >
        <button
          onClick={toggle}
          aria-expanded={isOpen}
          className={`w-full flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${colorSet.bg} ${colorSet.text}`}
        >
          <p className="text-lg font-semibold">{title}</p>

          {/* 아이콘 회전도 모션으로 */}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="will-change-transform"
          >
            <ChevronDown
              size={22}
              strokeWidth={1.5}
              className={colorSet.icon}
            />
          </motion.span>
        </button>

        {/* 내용부: 펼침/접힘 모션 */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              // height: 0 → auto + opacity
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: "auto", opacity: 1 },
                collapsed: { height: 0, opacity: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white overflow-hidden"
            >
              {/* 안쪽 리스트 컨테이너에 stagger */}
              <motion.div
                variants={listContainer}
                initial={false}
                animate="open"
                exit="collapsed"
                className="px-5 py-3 text-[14px] text-gray-800 divide-y divide-gray-200"
              >
                {/* children이 li가 아니라 컴포넌트일 수 있어 개별 래핑해도 OK */}
                {Array.isArray(children) ? (
                  children.map((child, idx) => (
                    <motion.div key={idx} variants={item}>
                      {child}
                    </motion.div>
                  ))
                ) : (
                  <motion.div variants={item}>{children}</motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }} // 섹션의 35%가 보이면 실행, 한 번만
      className="bg-white py-[50px] px-3 text-center text-gray-800"
    >
      <motion.p
        variants={fadeUp}
        className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2"
      >
        <Heart className=" w-4 h-4 inline text-[#ff957a] fill-[#ff957a]" />
      </motion.p>
      <h2 className="text-[22px] font-semibold mb-4">마음 전하실 곳</h2>

      <div className="text-[16px] leading-relaxed text-gray-700 mb-10">
        <motion.p variants={fadeUp}>저희 두 사람의 소중한 시작을</motion.p>
        <motion.p variants={fadeUp}>축하해주시는 모든 분들께</motion.p>
        <motion.p variants={fadeUp}>진심으로 감사드립니다.</motion.p>
        <motion.p variants={fadeUp}>따뜻한 진심을 오래도록 간직하고</motion.p>
        <motion.p variants={fadeUp}>행복하게 잘 살겠습니다.</motion.p>
      </div>
      <div className="w-full mx-auto flex flex-col gap-4 py-8">
        {hostInfo.map((host) => (
          <Accordion key={host.host} title={host.host}>
            {host.accountInfo.map((acc) => (
              <AccountItem key={`${host.host}-${acc.name}`} {...acc} />
            ))}
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
}
