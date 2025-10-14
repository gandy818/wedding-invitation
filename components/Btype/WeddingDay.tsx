export default function BtypeWeddingDay() {
  return (
    <div className="bg-white py-[50px] flex flex-col items-center text-center text-gray-800">
      <div className="mb-10">
        <p className="text-sm tracking-[0.25em] text-[#B5CDA4] mb-2">
          WEDDING DAY
        </p>

        <div className="mt-6">
          <p className="text-xl font-medium mb-1">
            2025.12.27. 토요일 오전 11:20
          </p>
          <p className="text-lg font-medium text-gray-700">
            더베뉴지서울 1층 네이처홀
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full max-w-[320px] border-t border-gray-200 my-6" />

      {/* 달력 */}
      <div className="text-center w-[60%]">
        <div className="grid grid-cols-7 gap-1 mb-4 text-[13px] font-semibold items-center">
          <span className="text-red-500">S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        <div className="grid grid-cols-7 gap-y-5 text-[14px] items-center">
          {[
            "",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
          ].map((day, i) =>
            day === "27" ? (
              <div
                key={i}
                className="w-8 h-8 text-[80%] flex items-center justify-center mx-auto rounded-full bg-[#D86343] text-white font-medium"
              >
                {day}
              </div>
            ) : (
              <div
                key={i}
                className={`text-gray-800 ${
                  i % 7 === 0 && day ? "text-red-500" : ""
                }`}
              >
                {day}
              </div>
            )
          )}
        </div>
      </div>

      {/* 하단 구분선 */}
      <div className="w-full max-w-[320px] border-t border-gray-200 mt-6" />
    </div>
  );
}
