import TestimonialCard from "./common/TestimonialCard";
import esther from "../assets/profilePictures/esther-li.png";
import linsday from "../assets/profilePictures/linsday-adebayo.png";
import mary from "../assets/profilePictures/mary-jones.png";
import samuel from "../assets/profilePictures/samuel-douglas.png";
import stefan from "../assets/profilePictures/stefan-garcia.png";
import SectionHeader from "./common/SectionHeader";

export default function TestimonialsSection() {
  return (
    <div
      id="testimonials-section"
      className="w-full py-[100px] px-[120px] bg-white flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-full">
        <SectionHeader
          title="Testimonials"
          description="Hear from our esteemed guests about their unforgettable experiences at Serenity Cove, where luxury and service exceed expectations, creating moments that linger long after their stay."
        />
        <div
          id="testimonial-container"
          className="flex w-[1265px] items-center justify-center gap-x-[20px] gap-y-[20px] flex-wrap"
        >
          <TestimonialCard
            name="Mary Jones"
            photo={mary}
            review='"Our stay at Serenity Cove was nothing short of magical. From the moment we arrived, the staff made us feel like royalty, and the ocean view suite was breathtaking. It was the perfect setting for our anniversary getaway."'
          />
          <TestimonialCard
            name="Samuel Douglas"
            photo={samuel}
            review='"I&apos;ve traveled to many luxury resorts, but the experience at Serenity Cove stands out. The attention to detail, the exquisite dining, and the serene spa treatments left me feeling completely rejuvenated. Truly a top-notch destination."'
          />
          <TestimonialCard
            name="Esther Li"
            photo={esther}
            review='"Serenity Cove exceeded all our expectations for our family vacation. The kids loved the activities and the infinity pool, while we indulged in the spa and gourmet dining. It was the ideal balance of fun and relaxation."'
          />
          <TestimonialCard
            name="Lindsay Adebayo"
            photo={linsday}
            review='"The wedding of our dreams came to life at Serenity Cove. Every detail was meticulously handled, from the stunning beachfront ceremony to the elegant reception. Our guests are still talking about it. Thank you for making our special day unforgettable."'
          />
          <TestimonialCard
            name="Stefan Garcia"
            photo={stefan}
            review='"As a frequent business traveler, the amenities and service at Serenity Cove provided a seamless experience for my executive retreat. The meeting facilities were impeccable, and the team went above and beyond to ensure our event was a success. I look forward to returning."'
          />
        </div>
      </div>
    </div>
  );
}
