'use client';

import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import images from '../data/gallery.json';
import Calendar from '@/components/Calendar';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  return (
    <div className="max-w-[400px] text-center h-screen overflow-y-scroll w-full mx-auto scroll-hide pb-5">
      {/* 대문 사진 */}
      <div className="w-full px-4 ">
        <img src={`/images/gallery/04.png`} className="rounded-tl-full rounded-tr-full" />
      </div>

      {/* 초대 문구 */}
      <div className="">
        <p className="mt-28 text-[#555555]">
          사람이 온다는 건 실은 어마어마한 일이다. <br /> 그는 그의 과거와 현재와 그리고 <br /> 그의
          미래와 함께 오기 때문이다. <br /> 한 사람의 일생이 오기 때문이다.
        </p>

        <p className="py-11 text-[#555555]">- 정현종, 방문객</p>

        <p className="text-[#555555]">
          저희 두 사람이 함께하는 새로운 시작에 <br />
          귀한 발걸음으로 축복해 주시면 감사하겠습니다.
        </p>

        <p className="text-[#020817] my-12">신랑 이민호 · 신부 배하윤</p>
      </div>

      {/* 중간 이미지 */}
      <img src={`/images/gallery/05.png`} className="" />

      {/* 달력 */}
      <Calendar />

      {/* 갤러리 */}
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
    </div>
  );
}
