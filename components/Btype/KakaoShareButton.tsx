"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function BtypeKakaoShareButton() {
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
    if (!window.Kakao?.Share) {
      alert("카카오 SDK가 아직 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "김관휘 ♥ 유나영, 결혼합니다!!",
        description: "2025.12.27(토) 오전 11:20 더베뉴지 서울 1층 네이처홀",
        imageUrl:
          "https://wedding-invitation-nygh.vercel.app/assets/images/thumbnail.jpeg",
        link: {
          mobileWebUrl: "https://wedding-invitation-nygh.vercel.app/B",
          webUrl: "https://wedding-invitation-nygh.vercel.app/B",
        },
      },
      buttons: [
        {
          title: "모바일 청첩장 보기",
          link: {
            mobileWebUrl: "https://wedding-invitation-nygh.vercel.app/B",
            webUrl: "https://wedding-invitation-nygh.vercel.app/B",
          },
        },
      ],
    });
  }, []);

  return (
    <button
      onClick={handleShare}
      className="bg-[#FEE500] cursor-pointer text-[#000000e6] flex items-center text-[14px] gap-1 rounded-lg px-4 py-2.5 font-semibold shadow-lg leading-none"
    >
      <Image
        src="/assets/icons/kakaotalk.svg"
        width={20}
        height={18}
        alt="kakaotalk"
      />
      카톡 공유하기!
    </button>
  );
}
