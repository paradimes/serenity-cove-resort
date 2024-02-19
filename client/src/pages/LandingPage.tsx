import ActivitiesSection from "../components/ActivitiesSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import LandingSection from "../components/LandingSection";
import OffersSection from "../components/OffersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WelcomeSection from "../components/WelcomeSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full h-full ">
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
