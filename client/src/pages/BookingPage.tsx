import FooterSection from "../components/FooterSection";
import PageTitleSection from "../components/common/PageTitleSection";
import bgImg from "../assets/bookingPageBG.jpg";
import BookingForm from "@/components/BookingForm";
// import TestBookingForm from "@/components/TestBookingForm";

export default function BookingPage() {
  return (
    <div className="flex flex-col w-full h-full   ">
      <PageTitleSection bgImg={bgImg} title="Book your trip" />
      <div
        id="text-section"
        className="px-[60px] md:px-[120px] py-[100px] flex flex-col items-start justify-start gap-5"
      >
        <p className="text-[23px] text-center">Trip Details</p>
        <BookingForm />
        {/* <TestBookingForm /> */}
      </div>
      <FooterSection />
    </div>
  );
}
