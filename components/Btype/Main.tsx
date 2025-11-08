"use client";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function BtypeMain() {
  return (
    <div
      className="relative h-[720px] bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("/assets/images/main.jpeg")',
        backgroundPosition: "center 10%",
      }}
    >
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-full text-center ${greatVibes.className}`}
        style={{ bottom: 140 }}
      >
        <p className="text-[70px] leading-[1.05] text-[#118b50] drop-shadow-sm">
          Happy
        </p>
        <p className="mt-1 text-[70px] leading-[1.05] text-[#118b50] drop-shadow-sm">
          Wedding day
        </p>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 w-[86%] max-w-[420px] text-center"
        style={{ bottom: 56 }}
      >
        <div className="grid grid-cols-3 items-center">
          <span className="text-[14px] font-semibold tracking-wide text-[#118b50]">
            김관휘
          </span>
          <span className="text-[14px] font-semibold tracking-wide text-[#118b50]">
            25. 12. 27.
          </span>
          <span className="text-[14px] font-semibold tracking-wide text-[#118b50]">
            유나영
          </span>
        </div>

        {/* 아주 작은 캡션 (옵션) */}
        <p className="mt-3 text-[7px] leading-[1.2] text-[#118b50]">
          We met by chance, but stayed by choice, learning that real love means
          choosing each other every day. Today marks the start of a lifelong
          promise, our hearts set on a future filled with hope and laughter. Now
          we are ready to write the next chapter—together.
        </p>
      </div>
    </div>
  );
}
