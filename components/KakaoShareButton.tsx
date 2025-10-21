"use client";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton() {
  //  카카오 SDK 로드 및 초기화
  useEffect(() => {
    if (window.Kakao && window.Kakao.isInitialized()) return;

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("f6922ff1a9df6501d219a49f6f653d15");
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleShare = useCallback(() => {
    if (!window.Kakao?.Link) {
      alert("카카오 SDK가 아직 로드되지 않았습니다.");
      return;
    }

    try {
      window.Kakao.Link.sendCustom({
        templateId: 125155,
      });
      console.log(window.Kakao);
    } catch (e) {
      console.error(e);
      alert("카카오 공유 중 오류가 발생했습니다.");
    }
  }, []);

  return (
    <button
      onClick={handleShare}
      className="bg-[#FEE500] text-[#000000e6] flex items-center text-[13px] gap-1 rounded-sm px-4 py-2 font-semibold shadow-lg"
    >
      <Image
        src="/assets/icons/kakaotalk.svg"
        width={20}
        height={18}
        alt="kakaotalk"
      />
      카톡 공유하기
    </button>
  );
}
