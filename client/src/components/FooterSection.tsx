import companyLogo from "../assets/serenityCoveLogo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export default function FooterSection() {
  return (
    <div
      id="footer-section"
      className="w-full h-[540px] px-auto bg-yellow-700 flex flex-col items-center justify-center"
    >
      <div
        id="footer-container"
        className="w-full h-full border-2 border-white my-[60px] relative "
      >
        <div
          id="logo-container"
          className="flex flex-row items-center justify-center gap-[5px] absolute left-10"
        >
          <img
            src={companyLogo}
            alt="company-logo"
            className="w-[17px] h-[17px]"
          />
          <span className="text-[16px] text-white font-medium hover:cursor-pointer">
            Serenity Cove Luxury Resorts & Spa
          </span>
        </div>
        <div
          id="social-media-container"
          className="flex flex-row gap-5 absolute bottom-0 left-10"
        >
          <div
            id="facebook"
            className=" w-[67px] h-[50px] rounded-[50px] border-2 border-yellow-500 border-opacity-40 hover:border-opacity-90 hover:cursor-pointer p-4 flex items-center justify-center"
          >
            <img src={facebook} className="w-4 h-4" />
          </div>
          <div
            id="instagram"
            className=" w-[67px] h-[50px] rounded-[50px] border-2 border-yellow-500 border-opacity-40 hover:border-opacity-90 hover:cursor-pointer p-4 flex items-center justify-center"
          >
            <img src={instagram} className="w-4 h-4" />
          </div>
        </div>
        <div
          id="links-container"
          className="flex flex-row gap-10 absolute left-[500px] font-sans"
        >
          <div id="resorts" className="w-[200px] flex flex-col gap-8">
            <span className="text-white font-medium">Resorts</span>
            <ul className="list-none text-yellow-50 font-light">
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Serenity Cove
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                HILTOFF
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Triple Tree
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Five Seasons
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Luigiott
              </li>
            </ul>
          </div>
          <div id="services" className="w-[200px] flex flex-col gap-8 ">
            <span className="text-white font-medium">Services</span>
            <ul className="list-none text-yellow-50 font-light">
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Vacation Resorts
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Events
              </li>
            </ul>
          </div>
          <div id="about" className="w-[200px] flex flex-col gap-8">
            <span className="text-white font-medium">Resorts</span>
            <ul className="list-none text-yellow-50 font-light">
              <li className="mb-2 hover:underline hover:cursor-pointer">
                About Us
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                News
              </li>
              <li className="mb-2 hover:underline hover:cursor-pointer">
                Partners
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
