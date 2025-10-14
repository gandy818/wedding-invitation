import Image from "next/image";

export default function Parents() {
  return (
    <section className="bg-white py-[50px] px-6 text-center text-gray-800">
      <p className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2">
        GROOM & BRIDE
      </p>
      <h2 className="text-2xl font-semibold mb-4">그날의 신랑 신부</h2>

      <div className="text-base leading-relaxed text-gray-700 mb-10">
        <p>저희의 시작을 사랑으로 응원해주신</p>
        <p>양가 부모님을 소개합니다.</p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/groomParents.jpeg"
              alt="groom parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-4 text-sm">
            <span className="text-[#B5CDA4] font-medium">신랑</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-gray-700">관휘의 부모님</span>
          </div>

          <div className="mt-3 text-lg">
            <span className="font-semibold">김태성</span>
            <span className="mx-2 text-[#D86343]">❤️</span>
            <span className="font-semibold">유명옥</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/brideParents.jpeg"
              alt="bride parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-4 text-sm">
            <span className="text-[#D86343] font-medium">신부</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-gray-700">나영의 부모님</span>
          </div>

          <div className="mt-3 text-lg">
            <span className="font-semibold">유영근</span>
            <span className="mx-2 text-[#D86343]">❤️</span>
            <span className="font-semibold">박순덕</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/groomParents.jpeg"
              alt="groom parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-4 text-sm">
            <span className="text-[#B5CDA4] font-medium">신랑</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-gray-700">김태성 유명옥의 아들</span>
          </div>

          <div className="mt-3 text-lg">
            <span className="font-semibold">김관휘</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/assets/images/groomParents.jpeg"
              alt="groom parents"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-4 text-sm">
            <span className="text-[#B5CDA4] font-medium">신부</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-gray-700">유영근 박순덕의 딸</span>
          </div>

          <div className="mt-3 text-lg">
            <span className="font-semibold">유나영</span>
          </div>
        </div>
      </div>
    </section>
  );
}
