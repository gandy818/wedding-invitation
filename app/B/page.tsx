import Invitation from "@/components/Btype/Invitation";
import Main from "@/components/Btype/Main";
import WeddingDay from "@/components/Btype/WeddingDay";
import GroomAndBride from "@/components/Btype/GroomAndBride";
import Gallery from "@/components/Btype/Gallery";
import Infomation from "@/components/Btype/Infomation";
import Account from "@/components/Btype/Account/Account";
import Location from "@/components/Btype/Location";
import Parents from "@/components/Btype/Parents";

export default function BType() {
  return (
    <div className="text-center w-full max-w-[480px]">
      <main>
        <Main />
        <Invitation />
        <WeddingDay />
        <Parents />
        <GroomAndBride />
        <Gallery />
        <Infomation />
        <Account />
        <Location />
      </main>
    </div>
  );
}
