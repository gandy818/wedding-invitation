export default function Invitation() {
  return (
    <div className="min-h-screen bg-[#F5F9F5] flex flex-col items-center justify-center px-6 py-12 text-center text-gray-800">
      <p className="text-sm tracking-[0.25em] text-[#b5cda4] mb-2">
        INVITATION
      </p>
      <h1 className="text-xl font-semibold mb-10">소중한 분들을 초대합니다</h1>

      <div className="space-y-1 leading-relaxed text-base">
        <p>두 사람이 하나가 될 새 인생을 시작합니다.</p>
        <p>사랑으로 가득 채워</p>
        <p>즐거움은 나누고 어려움은 이겨내는</p>
        <p>함께 나아가는 삶을 꾸리겠습니다.</p>
      </div>

      <div className="space-y-1 leading-relaxed text-base mt-8">
        <p>언제나 저희 곁에 있어주신 소중한 분들과</p>
        <p>함께 첫 시작을 내딛고 싶습니다.</p>
        <p>특별하고 의미있는 하루에 함께하시어</p>
        <p>저희의 시작을 축복해주세요.</p>
      </div>

      <div className="mt-12 text-base leading-relaxed space-y-2">
        <p>
          김태성 · 유명옥 의 아들 <span className="font-semibold">관휘</span>
        </p>
        <p>
          유영근 · 박순덕 의 딸 <span className="font-semibold">나영</span>
        </p>
      </div>
    </div>
  );
}
