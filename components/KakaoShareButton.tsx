"use client";
import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton() {
  // ✅ 카카오 SDK 로드 및 초기화
  useEffect(() => {
    // 이미 로드된 경우 방지
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

  // ✅ 클릭 시 공유 실행
  const handleShare = useCallback(() => {
    if (!window.Kakao?.Link) {
      alert("카카오 SDK가 아직 로드되지 않았습니다.");
      return;
    }

    try {
      window.Kakao.Link.sendCustom({
        templateId: 1324897,
        // templateArgs: {
        //   groom: "김관휘",
        //   bride: "유나영",
        //   date: "2025.12.27",
        //   place: "더베뉴지서울 1층 네이처홀",
        //   linkUrl: "https://wedding-invitation-nygh.vercel.app/",
        // },
      });
    } catch (e) {
      console.error(e);
      alert("카카오 공유 중 오류가 발생했습니다.");
    }
  }, []);

  return (
    <button
      onClick={handleShare}
      className="bg-[#FEE500] text-[#000000] rounded-lg px-4 py-2 font-semibold"
    >
      💛 카카오톡으로 공유하기
    </button>
  );
}
