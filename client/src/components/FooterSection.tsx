import companyLogo from "../assets/serenityCoveLogo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import FooterLinks from "./common/FooterLinks";

export default function FooterSection() {
  return (
    <div
      id="footer-section"
      className="w-full h-[540px] py-[60px] px-[120px] bg-yellow-700 flex flex-col items-center justify-center"
    >
      <div id="footer-container" className="w-full h-full relative">
        <div
          id="logo-container"
          className="flex flex-row items-center justify-center gap-[5px] absolute left-0"
        >
          <img
            src={companyLogo}
            alt="company-logo"
            className="w-[17px] h-[17px]"
          />
          <span className="text-[16px] text-white font-medium hover:cursor-pointer">
            Serenity Cove Luxury Resort & Spa
          </span>
        </div>
        <div
          id="social-media-container"
          className="flex flex-row gap-5 absolute bottom-0 left-0"
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
          className="flex flex-row gap-5 absolute left-[425px] font-sans"
        >
          <FooterLinks
            header="Resorts"
            links={[
              "Serenity Cove",
              "HILTOFF",
              "Triple Tree",
              "Five Seasons",
              "Luigiott",
            ]}
          />
          <FooterLinks
            header="Services"
            links={["Vacation Resorts", "Events"]}
          />
          <FooterLinks
            header="About"
            links={["About Us", "News", "Partners"]}
          />
        </div>
        <div
          id="contact-container"
          className="flex flex-col items-start justify-start gap-8 absolute left-[425px] bottom-0 "
        >
          <hr className=" w-[60px] h-[1px] bg-yellow-300 border-0 rounded hover:bg-yellow-100" />
          <div className="flex flex-col gap-[5px] font-sans font-light text-yellow-50 ">
            <span className="text-[16px] hover:cursor-pointer hover:underline">
              +1 (800) 225-8521
            </span>
            <span className="text-[16px] hover:cursor-pointer hover:underline">
              info@serenity-resorts.com{" "}
            </span>
          </div>
        </div>
        <div
          id="copyright-container"
          className="flex flex-col text-right gap-0 absolute right-0 bottom-0 text-yellow-500 font-sans font-light hover:underline"
        >
          <span className="text-[11px] ">© 2024 — Serenity Resorts</span>
          <span className="text-[11px] ">All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
