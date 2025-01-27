export default function Home() {
  const daysInDecember = 31;
  const startDay = 1; // 12월 1일이 금요일이므로 요일 인덱스 (0: 일요일, 1: 월요일, ... 6: 토요일)
  const days = Array.from({ length: daysInDecember }, (_, i) => i + 1);
  const weddingDay = 27;

  let currentWeek = Array(startDay).fill(null); // 첫 주는 시작 요일 전까지 빈칸으로 채움
  const weeks: (number | null)[][] = [];

  days.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === days.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  return (
    <div className="max-w-[400px] text-center h-screen overflow-y-scroll w-full mx-auto bg-white scroll-hide pb-5">
      <h1 className="text-center py-6">with love</h1>

      {/* 대문 사진 */}
      <div className="w-full px-4">
        <img
          src="https://toourguest.com/images/cards/sample/mobile/seychelles_cover.png"
          className="rounded-tl-full rounded-tr-full"
        />
      </div>

      {/* 초대 문구 */}
      <p className="mt-28 text-[#555555]">
        사람이 온다는 건 실은 어마어마한 일이다. <br /> 그는 그의 과거와 현재와 그리고 <br /> 그의
        미래와 함께 오기 때문이다. <br /> 한 사람의 일생이 오기 때문이다.
      </p>

      <p className="py-11 text-[#555555]">- 정현종, '방문객'</p>

      <p className="text-[#555555]">
        저희 두 사람이 함께하는 새로운 시작에 <br />
        귀한 발걸음으로 축복해 주시면 감사하겠습니다.
      </p>

      <p className="text-[#020817] my-12">신랑 이민호 · 신부 배하윤</p>

      {/* 중간 이미지 */}
      <img src="https://toourguest.com/images/cards/sample/mobile/note.png" />

      {/* 달력 */}
      <div className="py-10">
        <p className="text-4xl">WEDDING DAY</p>
        <p className="text-[#111] text-sm pt-12">2025년 12월 27일 토요일 | 오전 11시 20분</p>
        <p className="text-[#111] opacity-45 text-sm pt-3">
          {' '}
          Saturday, December 27, 2025 | AM 11: 20
        </p>

        <table className="mx-auto border-t mt-7">
          <thead>
            <tr>
              {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                <th
                  key={idx}
                  className={`p-3 ${idx === 0 ? 'text-red-500' : 'text-gray-600'} font-normal`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, i) => (
              <tr key={i}>
                {week.map((day, idx) => (
                  <td
                    key={idx}
                    className={`relative p-3 ${idx === 0 ? 'text-red-500' : 'text-gray-600'}`}
                  >
                    {day === weddingDay && (
                      <div className="left-0 absolute p-3 rounded-full m- bg-red-200 top-0 w-full h-full text-white">
                        {day || ''}
                      </div>
                    )}

                    {day || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 오시는 길 */}
      <div className="bg-[##C2B0A2]">{/* 자차 */}</div>
    </div>
  );
}
