"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";

export default function BtypeLocation() {
  const container: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3.2,
        ease: [0.16, 1, 0.3, 1], // 부드러운 easeOut
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} // 섹션의 35%가 보이면 실행, 한 번만
      className=" bg-[#F5F9F5] flex flex-col items-center justify-center px-6 py-16 text-center text-gray-800"
    >
      <div className="mb-10">
        <p className="text-sm tracking-[0.25em] text-[#b5cda4] mb-2">
          LOCATION
        </p>
        <h1 className="text-2xl font-semibold">오시는 길</h1>
      </div>

      <div className="text-xl leading-relaxed mb-10">
        <p className="flex items-center justify-center gap-2">
          <MapPin className="text-[#b5cda4] w-6 h-6" />
          서울 강서구 강서로 388
        </p>
        <p className="text-gray-600 mt-4 text-lg">더베뉴지서울 1층 네이처홀</p>
      </div>

      <div className="w-full max-w-md rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
        {/* 지도 */}
        <div
          style={{
            font: "normal normal 400 12px/normal dotum, sans-serif",
            width: "100%",
            maxWidth: "640px",
            color: "#333",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <div>
            <a
              href="https://map.kakao.com/?urlX=464504.9999999995&urlY=1127990.0000000023&itemId=8700757&q=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&srcid=8700757&map_type=TYPE_MAP&from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="map"
                src="http://t1.daumcdn.net/roughmap/imgmap/c20f6da94ba05c68f68943d75ed43d1ad99612f1115dfadf1eda0f5a9a3ae976"
                width="100%"
                height="358px"
                alt="더베뉴지서울 지도"
                style={{
                  border: "1px solid #ccc",
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="flex items-center justify-between px-4 py-3  border-gray-200 bg-white text-sm">
          <div className="flex items-center gap-2 text-gray-700 text-md">
            <MapPin className="text-gray-500 w-4 h-4 " />
            서울 강서구 강서로 388
          </div>
          <a
            href="https://map.kakao.com/link/to/서울 강서구 강서로 388"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-md text-[#6ea682] font-medium hover:underline"
          >
            길찾기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414L13.172 12Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ====== 네비게이션 / 교통 안내 ====== */}
      <div className="w-full max-w-md text-left mt-10 text-gray-700 text-[15px] leading-relaxed">
        {/* 네비게이션 */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2 text-lg">내비게이션</h3>
          <p className="text-gray-500 mb-4 text-md">
            버튼을 누르면 앱에서 길안내가 시작됩니다.
          </p>
          <div className="flex flex-col gap-4 justify-between">
            <a
              href="nmap://search?query=더베뉴지서울&appname=https://ourfirstletter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full justify-center  py-2 rounded-lg shadow-lg bg-white transition"
            >
              <img
                src="/assets/icons/navermap.jpg"
                alt="네이버지도"
                className="w-5 h-5 mr-1"
              />
              네이버지도
            </a>
            <a
              href="tmap://search?name=더베뉴지서울"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2 rounded-lg shadow-lg bg-white transition"
            >
              <img
                src="/assets/icons/tmap.png"
                alt="티맵"
                className="w-5 h-5 mr-1"
              />
              티맵
            </a>
            <a
              href="http://place.map.kakao.com/8700757"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2 rounded-lg shadow-lg bg-white transition"
            >
              <img
                src="/assets/icons/kakaomap.png"
                alt="카카오맵"
                className="w-5 h-5 mr-1"
              />
              카카오맵
            </a>
          </div>
        </div>

        {/* 지하철 */}
        <div className="border-t border-gray-200 pt-5 mt-5">
          <h3 className="font-semibold mb-2 text-lg">지하철</h3>
          <ul className="text-md text-gray-600 space-y-1">
            <li>· 5호선 발산역 3번 출구 방향 1분 이내</li>
            <li>· 9호선 양천향교역 6번 출구 도보 10분 직진</li>
          </ul>
        </div>

        {/* 버스 */}
        <div className="border-t border-gray-200 pt-5 mt-5">
          <h3 className="font-semibold mb-2 text-lg">버스</h3>
          <ul className="text-md text-gray-600 space-y-1">
            <li className="mb-4">· 발산역 정류장 하차</li>
            <li>
              <strong className="text-gray-800">지선버스</strong> 6630, 6632,
              6642, 6645, 6648, 6657, 6712
            </li>
            <li>
              <strong className="text-gray-800">간선버스</strong> 601, 605, 652,
              654, 661
            </li>
            <li>
              <strong className="text-gray-800">공항버스</strong> 6003
            </li>
            <li>
              <strong className="text-gray-800">일반버스</strong> 60, 60-3, 88,
              1002
            </li>
            <li>
              <strong className="text-gray-800">직행버스</strong> 3000, 8000
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
