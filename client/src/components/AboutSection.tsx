import NavBar from "./common/NavBar";
import bgImg from "../assets/aboutPageBG.png";

export default function AboutSection() {
  return (
    <div
      id="about-section"
      className="w-full h-[623px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
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
          About Us
        </span>
      </div>
    </div>
  );
}
