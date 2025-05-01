'use client';

import { useEffect, useRef, useState } from 'react';
import Calendar from './Calendar';
import { Gallery, Item } from 'react-photoswipe-gallery';
import images from '../data/gallery.json';

export default function Intro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [showImage, setShowImage] = useState(false);
  const frameCount = 215;
  const [fixedHeight, setFixedHeight] = useState<number | null>(null);

  useEffect(() => {
    // 최초 진입 시 height 저장
    if (fixedHeight === null) {
      setFixedHeight(window.innerHeight);
    }
  }, []);

  const currentFrame = (index: number): string =>
    `/images/wood_door/250429_00${index.toString().padStart(3, '0')}.jpg`;

  // 모든 이미지 preload
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        imagesRef.current[i] = img; // 배열에 저장 (1번부터 시작)
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    const render = (index: number) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      const img = imagesRef.current[index];
      if (!canvas || !context || !img) return;

      // 무조건 세로(화면 높이)를 기준으로 맞춤
      const targetHeight = fixedHeight ?? window.innerHeight;
      const drawHeight = targetHeight;

      const imgRatio = img.width / img.height; // 이미지 원본 비율
      const drawWidth = drawHeight * imgRatio; // 비율에 따라 너비 계산

      const canvasWidth = (canvas.width = window.innerWidth);
      const canvasHeight = (canvas.height = window.innerHeight);

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = 0; // 상단 정렬 원하면 0, 중앙 정렬은 (canvasHeight - drawHeight) / 2

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // 초기 1프레임 표시
    imagesRef.current[1]?.complete
      ? render(1)
      : imagesRef.current[1]?.addEventListener('load', () => render(1));

    const handleScroll = () => {
      const scrollTop = window.scrollY; // 현재 스크롤 위치
      const maxScrollTop = document.body.scrollHeight - window.innerHeight; // 스크롤할 수 있는 전체 높이 계산
      const scrollFraction = scrollTop / maxScrollTop; // 전체 스크롤 중 어디쯤인지 비율로 계산 (0 ~ 1 사이)
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)); // 현재 스크롤 위치에 맞는 프레임 번호를 계산

      requestAnimationFrame(() => render(frameIndex + 1)); // 자연스럽게 캔버스를 업데이트하라고 요청

      // 스크롤이 거의 끝나면 showImage를 true로 변경
      if (frameIndex >= frameCount - 1) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // 스크롤할 때마다 handScroll이 실행되도록

    return () => window.removeEventListener('scroll', handleScroll); // 컴포넌트가 사라질 때 스크롤 이벤트 제거
  }, []);

  return (
    <div className="relative">
      {/* 긴 스크롤 공간 확보 */}
      <div className="h-screen">
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
      </div>

      {/* 캔버스 끝나고 나오는 이미지 */}
      <div
        className={`transition-opacity ease-in-out text-center ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDuration: '3000ms' }}
      >
        <img src="/images/gallery/03.png" alt="test img" className="w-full" />

        <>
          {/* 초대 문구 */}
          <div className="text-center">
            <p className="mt-28 text-[#555555]">
              사람이 온다는 건 실은 어마어마한 일이다. <br /> 그는 그의 과거와 현재와 그리고 <br />{' '}
              그의 미래와 함께 오기 때문이다. <br /> 한 사람의 일생이 오기 때문이다.
            </p>

            <p className="py-11 text-[#555555]">- 정현종, 방문객</p>

            <p className="text-[#555555]">
              저희 두 사람이 함께하는 새로운 시작에 <br />
              귀한 발걸음으로 축복해 주시면 감사하겠습니다.
            </p>

            <p className="text-[#020817] my-12">신랑 이민호 · 신부 배하윤</p>
          </div>

          {/* 중간 이미지 */}
          <img src={`/images/gallery/05.png`} />

          {/* 달력 */}
          <Calendar />

          {/* 갤러리 */}
          <div className="py-10 text-center">
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
      </div>
    </div>
  );
}
