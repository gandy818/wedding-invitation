"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  // 3.5초 후 오버레이 자동 종료
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const t = setTimeout(() => setShow(false), 3500);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#F5F9F5]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-label="intro loading overlay"
        >
          {/* 텍스트 래퍼: 자식들을 순차적으로 등장(stagger) */}
          <motion.div
            className="flex flex-col items-center gap-2 text-[#305e30] "
            initial="hidden"
            animate="show"
            variants={{
              hidden: { transition: { staggerChildren: 0.0 } },
              show: {
                transition: { delayChildren: 0.4, staggerChildren: 0.9 },
              }, // 전체 3초 안에 3단계
            }}
          >
            <Line>
              김관휘
              <span className="mx-4 text-[14px]">그리고</span>
              유나영
            </Line>
            <Line>저희 결혼합니다</Line>
            <Line>
              <Heart className=" w-6 h-6 inline text-[#b5cda4] fill-[#b5cda4]" />
            </Line>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="text-[20px] tracking-widest "
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}
