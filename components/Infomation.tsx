"use client";

import { useState } from "react";
import Image from "next/image";
import hall from "@/public/assets/images/hall.jpeg";
import buffet from "@/public/assets/images/buffet.png";

type TabId = "buffet" | "flower" | "dress";

const TABS: { id: TabId; label: string }[] = [
  { id: "buffet", label: "연회장" },
  { id: "flower", label: "화환안내" },
  { id: "dress", label: "복장안내" },
];

export default function Infomation() {
  const [active, setActive] = useState<TabId>("flower"); // 기본: 화환안내
  const activeIndex = TABS.findIndex((t) => t.id === active);

  return (
    <section className="bg-white py-[50px] px-4 text-gray-800">
      <div className="text-center">
        <p className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2">
          INFORMATION
        </p>
        <h2 className="text-2xl font-semibold">안내 말씀드립니다</h2>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <div
          role="tablist"
          aria-label="안내 탭"
          className="relative grid grid-cols-3 items-center border-b border-gray-200"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={[
                "h-12 text-center text-lg transition-colors",
                active === t.id
                  ? "text-[#B5CDA4] font-semibold"
                  : "text-gray-400",
              ].join(" ")}
            >
              {t.label}
            </button>
          ))}

          <span
            className="pointer-events-none absolute bottom-[-1px] left-0 h-[3px] w-1/3 bg-[#94b07a] transition-transform duration-300"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
        </div>

        {/* 패널 */}
        <div className="pt-6">
          {/* 연회장 */}
          <div
            id="panel-hall"
            role="tabpanel"
            aria-labelledby="tab-hall"
            hidden={active !== "buffet"}
          >
            <Image
              src={buffet}
              alt="연회장 안내 이미지"
              className="h-[300px] object-cover"
              priority
            />
            <p className="mt-6 leading-8 text-left">
              연회장은 지하 1층에 있습니다. 음료와 주류가 무제한이니 마음껏
              즐겨주세요.
            </p>
          </div>

          {/* 화환안내 */}
          <div
            id="panel-flower"
            role="tabpanel"
            aria-labelledby="tab-flower"
            hidden={active !== "flower"}
          >
            <Image
              src={buffet}
              alt="화환 안내 이미지"
              className="h-[300px] object-cover"
              priority
            />
            <p className="mt-6 leading-8 text-left">
              환경보호를 위해 축하화환은 받고 있지 않습니다. 축하해주시는 마음만
              감사히 받겠습니다.
            </p>
          </div>

          {/* 복장안내 */}
          <div
            id="panel-dress"
            role="tabpanel"
            aria-labelledby="tab-dress"
            hidden={active !== "dress"}
          >
            <Image
              src={hall}
              alt="복장 안내 이미지"
              className="h-[300px] object-cover"
              priority
            />
            <p className="mt-6 leading-8 text-left">
              밝은 옷도 어울리는 홀입니다. 부담 갖지 마시고 편안한 차림으로
              참석해주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
