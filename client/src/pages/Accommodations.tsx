import FooterSection from "../components/FooterSection";
import PageTitleSection from "../components/common/PageTitleSection";
import bgImg from "../assets/accommodationsPageBG.png";

export default function Accommodations() {
  return (
    <div className="flex flex-col w-full h-full   ">
      <PageTitleSection bgImg={bgImg} title="Accommodations" />
      <div
        id="text-section"
        className="px-[120px] py-[100px] flex items-center justify-center"
      >
        <p className="text-[23px] text-center">
          Our accommodations are havens of plush comfort and elegance. Choose
          from our selection of suites, each with its unique charm, offering
          panoramic views of the sea, gardens, or pools. Featuring luxurious
          linens, state-of-the-art technology, and bespoke amenities, our rooms
          are designed to provide an unparalleled stay experience.
        </p>
      </div>
      <FooterSection />
    </div>
  );
}
