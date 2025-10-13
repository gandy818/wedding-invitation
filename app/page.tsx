import Invitation from "@/components/Invitation";
import Main from "../components/Main";
import WeddingDay from "@/components/WeddingDay";
import GroomAndBride from "@/components/GroomAndBride";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="text-center w-full max-w-[480px]">
      <main>
        <Main />
        <Invitation />
        <WeddingDay />
        <GroomAndBride />
        <Gallery />
        <section>안내말씀 드립니다</section>
        <section>마음 전하실 곳 </section>
        <section>오시는 길</section>
      </main>
    </div>
  );
}
