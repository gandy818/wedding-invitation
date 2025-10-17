"use client";
import { useEffect, useCallback } from "react";

interface KakaoShareButtonProps {
  templateId: number; // Kakao 템플릿 ID
  templateArgs?: Record<string, string>; // 템플릿 변수 (선택)
}

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton({
  templateId,
  templateArgs = {},
}: KakaoShareButtonProps) {
  // ✅ 카카오 SDK 로드 및 초기화
  useEffect(() => {
    // 이미 로드된 경우 방지
    if (window.Kakao && window.Kakao.isInitialized()) return;

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
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
        templateId,
        templateArgs,
      });
    } catch (e) {
      console.error(e);
      alert("카카오 공유 중 오류가 발생했습니다.");
    }
  }, [templateId, templateArgs]);

  return (
    <button
      onClick={handleShare}
      className="bg-[#FEE500] text-[#000000] rounded-lg px-4 py-2 font-semibold"
    >
      💛 카카오톡으로 공유하기
    </button>
  );
}
