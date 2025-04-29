'use client';

import { useEffect, useRef, useState } from 'react';

export default function Intro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(new Image());
  const [showImage, setShowImage] = useState(false);
  const frameCount = 44;

  const currentFrame = (index: number): string =>
    `/images/wood_door/wood_door_${index.toString().padStart(3, '0')}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    imgRef.current.src = currentFrame(1);

    imgRef.current.onload = () => {
      context.drawImage(imgRef.current, 0, 0);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY; // 현재 스크롤 위치
      const maxScrollTop = document.body.scrollHeight - window.innerHeight; // 스크롤할 수 있는 전체 높이 계산
      const scrollFraction = scrollTop / maxScrollTop; // 전체 스크롤 중 어디쯤인지 비율로 계산 (0 ~ 1 사이)
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)); // 현재 스크롤 위치에 맞는 프레임 번호를 계산

      requestAnimationFrame(() => updateImage(frameIndex + 1)); // 자연스럽게 캔버스를 업데이트하라고 요청

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

  // imgRef.current.src 를 새로 지정해서 다른 이미지를 불러온다.
  const updateImage = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    imgRef.current.src = currentFrame(index);
    imgRef.current.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height); // 새 이미지가 로드되면 캔버스를 깨끗이 지우고
      context.drawImage(imgRef.current, 0, 0); // 새로운 이미지를 캔버스에 그린다.
    };
  };

  return (
    <div className="relative">
      {/* 긴 스크롤 공간 확보 */}
      <div className="h-[1200px]">
        <canvas
          ref={canvasRef}
          width={650}
          height={650 * (1280 / 650)}
          className="fixed top-0 left-0 w-screen h-auto -z-10"
        />
      </div>

      {/* 캔버스 끝나고 나오는 이미지 */}
      <div
        className={`transition-opacity ease-in-out text-center ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDuration: '3000ms' }}
      >
        <img src="/images/gallery/03.png" alt="test img" className="w-full" />
      </div>
    </div>
  );
}
