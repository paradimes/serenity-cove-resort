import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import website from "../assets/website.svg";

export default function ContactSection() {
  return (
    <div
      id="contact-section"
      className="w-full py-[100px] px-auto bg-yellow-100 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-[1152px]">
        <div
          id="text-container"
          className="flex flex-col items-center justify-center gap-5"
        >
          <h1 className="text-5xl p-2">Contact Us</h1>
          <hr className=" w-[350px] h-[2px] bg-yellow-300 border-0 rounded" />
          <div className="flex flex-col gap-3 text-center m-2">
            <p>
              Embark on your journey to Serenity Cove Luxury Resort & Spa. For
              reservations and inquiries, contact us using any of the following
              methods. Our dedicated team is at your service to assist with your
              booking and answer any questions you may have.
            </p>
          </div>
        </div>
        <div
          id="options-container"
          className="w-[402px] flex flex-col items-start justify-start gap-[50px]"
        >
          <div
            id="phone-option"
            className="flex flex-row items-center justify-center gap-[30px]"
          >
            <img src={phone} alt="phone-icon" className="w-[50px] h-[50px]" />
            <h4 className="text-[24px] hover:underline">1-800-225-8521</h4>
          </div>
          <div
            id="email-option"
            className="flex flex-row items-center justify-center gap-[30px]"
          >
            <img src={email} alt="email-icon" className="w-[50px] h-[50px]" />
            <h4 className="text-[24px] hover:underline">
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
              className="w-[50px] h-[50px]"
            />
            <h4 className="text-[24px] hover:underline">
              serenitycoveresorts.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
