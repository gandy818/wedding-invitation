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
  const hasMore = showCount < list.length;

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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.9, ease: [0.16, 1, 0.3, 1] },
    },
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
        <motion.div
          variants={fadeUp}
          className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-3"
        >
          {shown.map(({ src, alt, width, height }, idx) => {
            const url = typeof src === "string" ? src : src;
            return (
              <Item
                key={url}
                original={url}
                thumbnail={url}
                width={width}
                height={height}
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
      </Gallery>

      <motion.div variants={fadeUp} className="mt-8">
        {hasMore ? (
          <button
            onClick={() => setShowCount((c) => Math.min(c + STEP, list.length))}
            className=" px-6 py-3 text-[16px] font-medium  text-[#809e84]  transition cursor-pointer focus:outline-0"
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
