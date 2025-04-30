export default function Calendar() {
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
    <div className="py-10 text-center">
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
                    <div className="bg-red-200 rounded-full w-full aspect-square absolute left-0 top-0.5">
                      <span className="absolute text-white top-2.5 left-3">{day || ''}</span>
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
  );
}
