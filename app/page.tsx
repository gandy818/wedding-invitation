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
      </main>
    </div>
  );
}
