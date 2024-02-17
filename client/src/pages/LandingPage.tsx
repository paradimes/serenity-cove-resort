import LandingSection from "../components/LandingSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full h-full ">
      <LandingSection />
      <div id="welcome-section">Welcome</div>
      <div id="activities-section">Activities</div>
      <div id="testimonials-section">testimonials</div>
      <div id="offers-section">Offers</div>
      <div id="contact-section">Contact</div>
      <div id="footer-section">Footer</div>
    </div>
  );
}
