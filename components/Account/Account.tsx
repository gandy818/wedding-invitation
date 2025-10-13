"use client";

import { useState, ReactNode } from "react";
import AccountItem from "./AccountItem";
import { ChevronDown } from "lucide-react";

export default function Account() {
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
          bank: "국민은행",
          account: "46190101148217",
        },
        {
          relation: "혼주",
          name: "유명옥",
          bank: "국민은행",
          account: "46190101148217",
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
          account: "46190101148217",
        },
        {
          relation: "혼주",
          name: "박순덕",
          bank: "농협은행",
          account: "46190101148217",
        },
      ],
    },
  ];

  const Accordion = ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const isGroom = title.includes("신랑");
    const headerColor = isGroom
      ? "bg-[#E6ECE1] text-[#5B6E4D]"
      : "bg-[#F6F1EE] text-[#815B4E]";

    return (
      <div className="border border-[#E6ECE1] rounded-lg mb-5 overflow-hidden transition-all">
        <button
          onClick={toggle}
          className={`w-full flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${headerColor}`}
        >
          <p className="font-[YesMyungjo]">{title}</p>
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown
              size={22}
              strokeWidth={1.5}
              className="text-[#e88ca6]"
            />
          </span>
        </button>

        {isOpen && (
          <div className="bg-white px-5 py-3 text-[14px] text-gray-800 divide-y divide-gray-200">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-white py-[50px] px-6 text-center text-gray-800">
      <p className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2">
        음 머라고하지
      </p>
      <h2 className="text-2xl font-semibold mb-4">마음 전하실 곳</h2>

      <div className="text-base leading-relaxed text-gray-700 mb-10">
        <p>저희 두 사람의 소중한 시작을</p>
        <p>축하해주시는 모든 분들께 감사드립니다.</p>
        <p>따뜻한 진심을 감사히 오래도록 간직하고</p>
        <p>행복하게 잘 살겠습니다.</p>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-4 py-8 font-[YesMyungjo]">
        {hostInfo.map((host) => (
          <Accordion key={host.host} title={host.host}>
            {host.accountInfo.map((acc) => (
              <AccountItem key={`${host.host}-${acc.name}`} {...acc} />
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
