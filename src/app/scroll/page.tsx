'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollPage() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);
  const totalPages = 4;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setPage((prevPage) => {
        let nextPage = prevPage + (e.deltaY > 0 ? 1 : -1);
        if (nextPage < 0) nextPage = 0;
        if (nextPage >= totalPages) nextPage = totalPages - 1;
        return nextPage;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.style.top = `${page * -100}vh`;
    }
  }, [page]);

  return (
    <div className="relative transition-all duration-1000 h-screen" ref={wrapRef}>
      <div className="bg-green-500 h-full">{/* 자차 */}</div>
      <div className="bg-orange-500 h-full">{/* 자차 */}</div>
      <div className="bg-yellow-400 h-full">{/* 자차 */}</div>
      <div className="bg-red-500 h-full">{/* 자차 */}</div>
    </div>
  );
}
