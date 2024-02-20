import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";

export default function About() {
  return (
    <div className="flex flex-col w-full h-full ">
      <AboutSection />
      <div
        id="text-section"
        className="px-[120px] py-[100px] flex items-center justify-center"
      >
        <p className="text-[23px] text-center">
          Serenity Cove Luxury Resort & Spa is more than a destination; it's a
          journey to the pinnacle of luxury, set against the backdrop of
          breathtaking natural beauty. With our commitment to exceptional
          service, we ensure every moment is imbued with sophistication,
          comfort, and bespoke experiences. From our meticulously appointed
          suites to our tranquil spa, gourmet dining, and private beach, every
          detail is crafted to evoke a sense of serene exclusivity.
        </p>
      </div>
      <FooterSection />
    </div>
  );
}
