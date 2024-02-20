import NavBar from "./NavBar";

type PageTitleSectionProps = {
  bgImg: string;
  title: string;
};

export default function PageTitleSection({
  bgImg,
  title,
}: PageTitleSectionProps) {
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
      <div className="absolute top-[60px] left-0 right-0 z-50 flex justify-center">
        <NavBar />
      </div>
      <div
        id="main-container"
        className="flex flex-col items-center justify-center w-[930px] gap-10  z-10"
      >
        <span className="text-white text-[84px] leading-tight text-center  font-medium text-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
}
