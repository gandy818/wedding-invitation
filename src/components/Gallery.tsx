'use client';

import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

export default function WeddingGallery() {
  const images = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0'); // 01, 02, ...
    return {
      source: `images/gallery/${num}.JPG`,
      alt: `사진 ${num}`,
    };
  });
  return (
    <>
      <div className="py-10 clear-start">
        <p className="text-4xl">GALLERY</p>
        <p className="text-[#111] opacity-25 text-sm pt-4 pb-12">
          사진을 클릭하시면 전체 화면 보기가 가능합니다
        </p>

        <Gallery>
          <div className="mx-auto grid grid-cols-3 gap-1 px-10">
            {images.map((image, index) => {
              return (
                <Item
                  key={index}
                  cropped
                  original={image.source}
                  thumbnail={image.source}
                  width="1280"
                  height="1920"
                >
                  {({ ref, open }) => (
                    <img
                      className="cursor-pointer w-25 h-38 max-w-none mx-auto object-cover"
                      alt={image.alt}
                      src={`/${image.source}`}
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>
              );
            })}
          </div>
        </Gallery>
      </div>
    </>
  );
}
