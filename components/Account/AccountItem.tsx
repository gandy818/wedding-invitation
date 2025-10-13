"use client";

import Image from "next/image";
// import kakaopay from "@/assets/icons/kakaopay.png";
// import toss from "@/assets/icons/toss.png";
import { ClipboardIcon } from "lucide-react";

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}

export default function AccountItem({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => alert("계좌번호가 복사되었습니다. 😉"),
      () => alert("계좌번호 복사에 실패했습니다. 🥲")
    );
  };

  return (
    <div className="flex flex-col gap-2 py-4">
      {/* 이름/관계 */}
      <div className="flex items-center gap-2 text-gray-800">
        <span className="text-gray-600">{relation}</span>
        <span className="font-semibold">{name}</span>
      </div>

      {/* 은행/계좌 + 복사 버튼 */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700">
          {bank} {account}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center bg-white w-9 h-9 rounded-full shadow-md hover:bg-gray-50 active:scale-95 transition"
          aria-label="계좌번호 복사"
        >
          <ClipboardIcon className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* 결제 링크 */}
      <div className="flex gap-2 mt-2">
        {kakaopayAccount && (
          <a
            href={kakaopayAccount}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center border border-gray-200 rounded-md py-1 px-3 hover:bg-gray-50 transition"
          >
            {/* <Image src={kakaopay} alt="kakaopay" width={50} height={20} /> */}
          </a>
        )}
        {tossAccount && (
          <a
            href={tossAccount}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center border border-gray-200 rounded-md py-1 px-3 hover:bg-gray-50 transition"
          >
            {/* <Image src={toss} alt="toss" width={70} height={20} /> */}
          </a>
        )}
      </div>
    </div>
  );
}
