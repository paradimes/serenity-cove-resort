import serenityCoveLogo from "../assets/serenityCoveLogo.svg";
import flightIcon from "../assets/flight-icon.svg";
import Button from "./common/Button";
import bgImg from "../assets/landingImage.jpg";
import NavBar from "./common/NavBar";

export default function LandingSection() {
  return (
    <div
      id="landing-section"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div
        id="bg-overlay"
        className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
      ></div>
      <NavBar />
      <div
        id="main-container"
        className="flex flex-col items-center justify-center w-[930px] gap-10 mt-24 z-10 "
      >
        <span className="text-white text-[84px] leading-tight text-center  font-medium text-nowrap">
          Serenity Cove <br /> Luxury Resort & Spa
        </span>
        <img src={serenityCoveLogo} className="" />
        <span className="text-yellow-200 text-[26px] text-center w-fit font-medium ">
          Where Elegance Meets Tranquility
        </span>
        <Button height="56" icon={flightIcon} title="Book your trip" />
      </div>
      <div className="absolute right-[120px] bottom-5 z-10">
        <span className="text-white text-sm text-center w-fit font-medium">
          serenitycove@resort.com | 1-800-225-8521
        </span>
      </div>
    </div>
  );
}
