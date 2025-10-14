"use client";

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
      ? "bg-[#edeeeb] text-[#5B6E4D] border-[#d0d3cb]"
      : "bg-[#f3edeb] text-[#815B4E] border-[#e4d7d2]";

    return (
      <div
        className={`border  ${headerColor} rounded-lg mb-5 overflow-hidden transition-all`}
      >
        <button
          onClick={toggle}
          className={`w-full flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${headerColor}`}
        >
          <p className="text-lg font-semibold">{title}</p>
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown
              size={22}
              strokeWidth={1.5}
              className="text-[#5B6E4D]"
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
        <Heart className=" w-4 h-4 inline text-[#ff957a] fill-[#ff957a]" />
      </p>
      <h2 className="text-2xl font-semibold mb-4">마음 전하실 곳</h2>

      <div className="text-lg leading-relaxed text-gray-700 mb-10">
        <p>저희 두 사람의 소중한 시작을</p>
        <p>축하해주시는 모든 분들께 감사드립니다.</p>
        <p>따뜻한 진심을 감사히 오래도록 간직하고</p>
        <p>행복하게 잘 살겠습니다.</p>
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
    </section>
  );
}
