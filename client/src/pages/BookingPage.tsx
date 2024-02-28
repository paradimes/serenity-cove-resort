import FooterSection from "../components/FooterSection";
import PageTitleSection from "../components/common/PageTitleSection";
import bgImg from "../assets/bookingPageBG.jpg";

export default function BookingPage() {
  return (
    <div className="flex flex-col w-full h-full   ">
      <PageTitleSection bgImg={bgImg} title="Book your trip" />
      <div
        id="text-section"
        className="px-[60px] md:px-[120px] py-[100px] flex items-center justify-center"
      >
        <p className="text-[23px] text-center">Get ready!</p>
      </div>
      <FooterSection />
    </div>
  );
}
