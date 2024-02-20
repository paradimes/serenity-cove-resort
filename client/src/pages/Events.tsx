import FooterSection from "../components/FooterSection";
import PageTitleSection from "../components/common/PageTitleSection";
import bgImg from "../assets/eventsPageBG.png";

export default function Events() {
  return (
    <div className="flex flex-col w-full h-full   ">
      <PageTitleSection bgImg={bgImg} title="Events" />
      <div
        id="text-section"
        className="px-[120px] py-[100px] flex items-center justify-center"
      >
        <p className="text-[23px] text-center">
          Serenity Cove offers an exquisite setting for meetings, weddings, and
          special events. Our elegant venues, expert planning services, and
          attention to detail ensure your event is executed flawlessly, making
          every moment memorable.
        </p>
      </div>
      <FooterSection />
    </div>
  );
}
