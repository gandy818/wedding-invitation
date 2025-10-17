import Invitation from "@/components/Invitation";
import Main from "../components/Main";
import WeddingDay from "@/components/WeddingDay";
import GroomAndBride from "@/components/GroomAndBride";
import Gallery from "@/components/Gallery";
import Infomation from "@/components/Infomation";
import Account from "@/components/Account/Account";
import Location from "@/components/Location";
import MidImage from "@/components/MidImage";
import IntroLoader from "@/components/IntroLoader";
import KakaoShareButton from "@/components/KakaoShareButton";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function Home() {
  return (
    <div className="text-center w-full max-w-[480px]">
      <IntroLoader />

      <main>
        <Main />
        <Invitation />
        <WeddingDay />
        <GroomAndBride />
        <MidImage />
        <Gallery />
        <Infomation />
        <Account />
        <Location />

        <div className="my-10 flex justify-center">
          <KakaoShareButton
            templateId={1324897} // ← Kakao Developers 템플릿 ID
            templateArgs={{
              groom: "김관휘",
              bride: "유나영",
              date: "2025.12.27",
              place: "더베뉴지서울 1층 네이처홀",
              linkUrl: "https://wedding-invitation-nygh.vercel.app/",
            }}
          />
        </div>
      </main>
    </div>
  );
}
