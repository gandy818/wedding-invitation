'use client';

import 'photoswipe/dist/photoswipe.css';
import Calendar from '@/components/Calendar';
import ScrollingOpenDoor from '@/components/ScrollingOpenDoor';
import WeddingGallery from '@/components/Gallery';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current!;
    const imgEl = imgRef.current!;

    gsap.fromTo(
      imgEl,
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top', // 화면 맨 위에 닿을 때 시작
          end: '+=100%', // 1 화면 높이만큼 스크롤
          scrub: true, // 스크롤 진행률과 동기화
          pin: true, // 이 구간 동안 고정
          anticipatePin: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className="max-w-[400px] text-center  w-full mx-auto scroll-hide pb-5">
      {/* 여기 */}
      <ScrollingOpenDoor />

      {/* 대문 사진 */}
      {/* <div className="w-full px-4 ">
        <img src={`/images/gallery/02.jpg`} width={400} />
      </div> */}
      {/* <div className="w-full px-4">
        <motion.img
          src="/images/gallery/02.jpg"
          alt="gallery image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }} // 25% 보이면 트리거, 매번 실행하려면 once:false
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="block"
        />
      </div> */}
      <div ref={sectionRef} className="w-full px-4">
        <img
          ref={imgRef}
          src="/images/gallery/02.jpg"
          width={400}
          alt="Pinned Image"
          className="mx-auto"
        />
      </div>

      {/* 초대 문구 */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // 20% 보이면 발동, 한 번만 실행
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
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
      </motion.div>

      {/* 중간 이미지 */}
      <img src={`/images/gallery/03.jpg`} className="" />

      {/* 달력 */}
      <Calendar />

      {/* 갤러리 */}
      <WeddingGallery />
    </div>
  );
}
