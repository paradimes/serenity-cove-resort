import SectionHeader from "./common/SectionHeader";

export default function WelcomeSection() {
  return (
    <div
      id="welcome-section"
      className="w-full py-[100px] px-[60px] md:px-[120px] bg-white flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-full">
        <SectionHeader
          title="Welcome"
          description="Welcome to Serenity Cove Luxury Resort & Spa, an oasis of elegance nestled in the heart of paradise. Here, luxury meets tranquility in a harmonious blend designed for discerning travelers seeking an escape into indulgence. Experience unparalleled service exquisite accommodations, and a world where your preferences are our priority. Embrace the art of relaxation and let us make your stay unforgettable."
        />
      </div>
    </div>
  );
}
