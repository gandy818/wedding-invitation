"use client";

import KakaoShareButton from "@/components/KakaoShareButton";
import { Link } from "lucide-react";

export default function Footer() {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://wedding-invitation-nygh.vercel.app/")
      .then(
        () => alert("주소가 복사되었습니다. 😉"),
        () => alert("주소 복사에 실패했습니다. 🥲")
      );
  };

  return (
    <div className="pb-16 flex gap-2 justify-center bg-[#F5F9F5]">
      <KakaoShareButton />
      <button
        className="bg-white text-[#000000e6] cursor-pointer flex items-center text-[13px] gap-1 rounded-lg px-4 py-2 font-semibold shadow-lg leading-none"
        onClick={() => handleCopy()}
      >
        <Link width={20} height={18} />
        링크 복사하기
      </button>
    </div>
  );
}
