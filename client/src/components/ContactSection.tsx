import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import website from "../assets/website.svg";
import SectionHeader from "./common/SectionHeader";

export default function ContactSection() {
  return (
    <div
      id="contact-section"
      className="w-full py-[100px] px-[120px] bg-yellow-100 flex flex-col items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-full">
        <SectionHeader
          title="Contact Us"
          description="Embark on your journey to Serenity Cove Luxury Resort & Spa. For reservations and inquiries, contact us using any of the following methods. Our dedicated team is at your service to assist with your booking and answer any questions you may have."
        />
        <div
          id="options-container"
          className="flex flex-col items-start justify-start gap-[50px]"
        >
          <div
            id="phone-option"
            className="flex flex-row items-center justify-center gap-[30px]"
          >
            <img src={phone} alt="phone-icon" className="w-[30px] h-[30px]" />
            <h4 className="text-[19px] hover:underline">1-800-225-8521</h4>
          </div>
          <div
            id="email-option"
            className="flex flex-row items-center justify-center gap-[30px]"
          >
            <img src={email} alt="email-icon" className="w-[30px] h-[30px]" />
            <h4 className="text-[19px] hover:underline">
              serenitycove@resort.com
            </h4>
          </div>
          <div
            id="website-option"
            className="flex flex-row items-center justify-center gap-[30px]"
          >
            <img
              src={website}
              alt="website-icon"
              className="w-[30px] h-[30px]"
            />
            <h4 className="text-[19px] hover:underline">
              serenitycoveresorts.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
