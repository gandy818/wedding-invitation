import Invitation from "@/components/Invitation";
import Main from "../components/Main";
import WeddingDay from "@/components/WeddingDay";
import GroomAndBride from "@/components/GroomAndBride";
import Gallery from "@/components/Gallery";
import Infomation from "@/components/Infomation";
import Account from "@/components/Account/Account";

export default function Home() {
  return (
    <div className="text-center w-full max-w-[480px]">
      <main>
        <Main />
        <Invitation />
        <WeddingDay />
        <GroomAndBride />
        <Gallery />
        <Infomation />
        <Account />
        <section>오시는 길</section>
      </main>
    </div>
  );
}
