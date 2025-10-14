export default function LocationSection() {
  return (
    <div className="min-h-screen bg-[#F5F9F5] flex flex-col items-center justify-center px-6 py-16 text-center text-gray-800">
      {/* 제목 */}
      <p className="text-sm tracking-[0.25em] text-[#b5cda4] mb-2">LOCATION</p>
      <h1 className="text-xl font-semibold mb-10">오시는 길</h1>

      {/* 주소 */}
      <div className="text-base leading-relaxed mb-10">
        <p className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[#b5cda4]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          서울 강서구 강서로 388
        </p>
        <p className="text-gray-600 mt-1">더베뉴지서울 1층 네이처홀</p>
      </div>

      {/* 지도 */}
      <div className="w-full max-w-md rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
        <div
          style={{
            font: "normal normal 400 12px/normal dotum, sans-serif",
            width: "100%",
            maxWidth: "640px",
            color: "#333",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <div>
            <a
              href="https://map.kakao.com/?urlX=464504.9999999995&urlY=1127990.0000000023&itemId=8700757&q=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&srcid=8700757&map_type=TYPE_MAP&from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="map"
                src="http://t1.daumcdn.net/roughmap/imgmap/c20f6da94ba05c68f68943d75ed43d1ad99612f1115dfadf1eda0f5a9a3ae976"
                width="100%"
                height="358px"
                alt="더베뉴지서울 지도"
                style={{
                  border: "1px solid #ccc",
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          </div>

          <div
            style={{
              overflow: "hidden",
              padding: "7px 11px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "0 0 2px 2px",
              backgroundColor: "rgb(249, 249, 249)",
            }}
          >
            <a
              href="https://map.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                width="72"
                height="16"
                alt="카카오맵"
                style={{ display: "block", width: "72px", height: "16px" }}
              />
            </a>

            <div
              style={{
                float: "right",
                position: "relative",
                top: "1px",
                fontSize: "11px",
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.kakao.com/?from=roughmap&srcid=8700757&confirmid=8700757&q=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&rv=on"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                로드뷰
              </a>

              <span
                style={{
                  width: "1px",
                  padding: 0,
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.kakao.com/?from=roughmap&eName=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&eX=464504.9999999995&eY=1127990.0000000023"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                길찾기
              </a>

              <span
                style={{
                  width: "1px",
                  padding: 0,
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=8700757&itemId=8700757&q=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&urlX=464504.9999999995&urlY=1127990.0000000023"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                지도 크게 보기
              </a>
            </div>
          </div>

          <div>
            <span
              style={{
                borderBottom: "0 none #333",
                position: "absolute",
                left: "-25px",
                top: "-136px",
                width: "0",
                height: "40px",
              }}
            ></span>
          </div>
        </div>

        {/* 하단 바 */}
        {/* <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            서울 강서구 강서로 388
          </div>
          <a
            href="https://map.kakao.com/link/to/서울 강서구 강서로 388"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#6ea682] font-medium hover:underline"
          >
            카카오 길찾기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414L13.172 12Z" />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
}
