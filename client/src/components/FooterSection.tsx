import companyLogo from "../assets/serenityCoveLogo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import FooterLinks from "./common/FooterLinks";

export default function FooterSection() {
  return (
    <div
      id="footer-section"
      className="w-full min-h-[540px] py-[60px] px-[60px] md:px-[120px] bg-yellow-700 flex flex-col items-center justify-center"
    >
      <div
        id="footer-container"
        className="w-full h-full relative flex flex-col lg:grid grid-cols-5 lg:gap-x-0 lg:gap-y-28 gap-5"
      >
        <div id="logo-container" className="col-span-1">
          <div className="flex items-center justify-start gap-[5px]">
            <img
              src={companyLogo}
              alt="company-logo"
              className="w-[17px] h-[17px]"
            />
            <span className="text-[16px] text-white font-medium hover:cursor-pointer">
              Serenity Cove Luxury Resort & Spa
            </span>
          </div>
        </div>

        <div
          id="links-container"
          className="col-span-3 flex flex-row max-lg:items-start max-lg:justify-center gap-5  2xl:pl-36 xl:pl-32 lg:pl-20 max-lg:mt-10"
        >
          <FooterLinks
            header="Resorts"
            links={{
              serenityCove: { linkTitle: "Serenity Cove", path: "/" },
              hiltoff: { linkTitle: "HILTOFF", path: "#" },
              tripleTree: { linkTitle: "Triple Tree", path: "#" },
              fiveSeasons: { linkTitle: "Five Seasons", path: "#" },
              luigiott: { linkTitle: "Luigiott", path: "#" },
            }}
          />
          <FooterLinks
            header="Services"
            links={{
              vacationResorts: { linkTitle: "Vacation Resorts", path: "#" },
              events: { linkTitle: "Events", path: "/events" },
              bookings: { linkTitle: "Bookings", path: "/book" },
            }}
          />
          <FooterLinks
            header="About"
            links={{
              aboutUs: { linkTitle: "About Us", path: "/about" },
              news: { linkTitle: "News", path: "#" },
              partners: { linkTitle: "Partners", path: "#" },
            }}
          />
        </div>
        {/* <br /> */}
        <div id="empty-grid-element" className="col-span-1"></div>

        <div
          id="social-media-container"
          className="flex flex-row gap-5 col-span-1 lg:items-end lg:justify-start max-lg:justify-start max-lg:items-center max-lg:mt-0"
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
          id="contact-container"
          className="col-span-3 flex lg:items-start lg:justify-end max-lg:items-start max-lg:justify-center flex-col gap-8  2xl:pl-36 xl:pl-32 lg:pl-20 max-lg:mt-5"
        >
          <hr className=" w-[60px] h-[1px] bg-yellow-300 border-0 rounded hover:bg-yellow-100" />
          <div className="flex flex-col gap-[5px]  font-light text-yellow-50 ">
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
          className="col-span-1 flex max-lg:items-start max-lg:justify-start items-end justify-end flex-col text-center lg:text-right gap-0 text-yellow-500  font-light hover:underline max-lg:mt-0"
        >
          <span className="text-[11px] ">© 2024 — Serenity Resorts</span>
          <span className="text-[11px] ">All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
