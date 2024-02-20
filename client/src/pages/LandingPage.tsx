import { useEffect, useState } from "react";
import ActivitiesSection from "../components/ActivitiesSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import LandingSection from "../components/LandingSection";
import OffersSection from "../components/OffersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WelcomeSection from "../components/WelcomeSection";
import NavBar from "../components/common/NavBar";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position);
      setIsScrolled(position > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full ">
      <div
        className={`fixed  left-0 right-0 z-50 flex justify-center  ${
          isScrolled ? "bg-yellow-800 bg-opacity-90 py-8 top-0" : "top-[60px]"
        }`}
      >
        <NavBar />
      </div>
      <LandingSection />
      <WelcomeSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <OffersSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
