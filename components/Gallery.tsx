"use client";

import Image, { StaticImageData } from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import images from "@/lib/gallery-images";
import { motion, type Variants } from "framer-motion";
import { useMemo, useState } from "react";

const INITIAL = 9;
const STEP = 9;

export default function GallerySection() {
  const list = images;
  const [showCount, setShowCount] = useState(INITIAL);

  const shown = useMemo(() => list.slice(0, showCount), [list, showCount]);
  const hiddenList = useMemo(() => list.slice(showCount), [list, showCount]);
  const hasMore = showCount < list.length;

  const container: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // src/width/height 안전 추출 유틸
  const pick = (src: string | StaticImageData, w?: number, h?: number) => {
    const url = typeof src === "string" ? src : src.src;
    const width =
      w ?? (typeof src !== "string" ? src.width : undefined) ?? 2048;
    const height =
      h ?? (typeof src !== "string" ? src.height : undefined) ?? 1365;
    return { url, width, height };
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-4 py-[50px] text-center text-gray-800"
    >
      <motion.div variants={fadeUp}>
        <p className="text-[14px] tracking-[0.25em] text-[#B5CDA4] mb-2 font-[EBGaramond]">
          GALLERY
        </p>
        <h2 className="text-[18px] font-semibold mb-10">우리의 소중한 순간</h2>
      </motion.div>

      <Gallery>
        {/* 보이는 썸네일들 */}
        <motion.div
          variants={fadeUp}
          className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-3"
        >
          {shown.map(({ src, alt, width, height }, idx) => {
            const {
              url,
              width: w,
              height: h,
            } = pick(src as any, width, height);
            return (
              <Item
                key={`thumb-${url}`}
                original={url}
                thumbnail={url}
                width={w}
                height={h}
              >
                {({ ref, open }) => (
                  <button
                    ref={ref as any}
                    onClick={open}
                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer hover:opacity-90 transition"
                    aria-label={`open ${alt}`}
                  >
                    <Image
                      src={url}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx < 3}
                    />
                  </button>
                )}
              </Item>
            );
          })}
        </motion.div>

        {/* 숨겨서 마운트만 하는 나머지 이미지들 (라이트박스 네비게이션 포함용) */}
        {hiddenList.map(({ src, alt, width, height }) => {
          const { url, width: w, height: h } = pick(src as any, width, height);
          return (
            <Item
              key={`hidden-${url}`}
              original={url}
              thumbnail={url}
              width={w}
              height={h}
            >
              {({ ref }) => (
                <span
                  ref={ref as any}
                  className="hidden"
                  aria-hidden
                  data-alt={alt}
                />
              )}
            </Item>
          );
        })}
      </Gallery>

      <motion.div variants={fadeUp} className="mt-8">
        {hasMore ? (
          <button
            onClick={() => setShowCount((c) => Math.min(c + STEP, list.length))}
            className="px-6 py-3 text-[16px]  font-medium text-[#809e84] transition cursor-pointer focus:outline-0"
          >
            사진 더보기
            <Image
              src="/assets/icons/heartArrow.png"
              alt="화살표"
              width={70}
              height={70}
              className="mt-2 ml-2"
            />
          </button>
        ) : null}
      </motion.div>
    </motion.section>
  );
}
