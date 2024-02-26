import OfferCard from "./common/OfferCard";
import SectionHeader from "./common/SectionHeader";

export default function OffersSection() {
  return (
    <div
      id="offers-section"
      className="w-full py-[100px] px-[60px] md:px-[120px] bg-yellow-50 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-full">
        <SectionHeader
          title="Exclusive Offers"
          description="Discover our curated selection of exclusive offers designed to enhance your stay. From early booking advantages to bespoke package deals, elevate your experience at Serenity Cove with these special promotions."
        />
        <div
          id="offers-container"
          className=" flex flex-row items-center justify-center gap-[25px] flex-wrap"
        >
          <OfferCard
            title="Silver Serenity Package"
            price="2500"
            description={
              "Dive into the essence of luxury with our Silver Serenity Package. Designed for those who wish to experience elegance with a touch of exclusivity, this package offers deluxe accommodations, fine dining, and unparalleled service, ensuring your stay is nothing short of memorable."
            }
            perks={[
              "Deluxe Suite Accommodation with Ocean View",
              "Daily Gourmet Breakfast for Two",
              "Welcome Champagne and Fruit Basket",
              "Complimentary Wi-Fi and In-Room Entertainment",
              "Access to Spa Facilities and Fitness Center",
              "Priority Reservation at Resort Restaurants",
            ]}
          />
          <OfferCard
            title="Gold Getaway Package"
            price="3800"
            description={
              "Elevate your stay with our Gold Getaway Package, the perfect choice for guests seeking an all-encompassing luxury experience. Enjoy the finest suites, exclusive amenities, and bespoke services tailored to your every need, all while basking in the beauty of our private beach and spa."
            }
            perks={[
              " Signature Suite with Panoramic Sea Views",
              "All-Inclusive Gourmet Dining for Two",
              "Private Beach Cabana Access",
              "Personal Butler Service",
              "Unlimited Spa Access with One Complimentary Treatment per Day",
              "Early Check-In and Late Check-Out (Subject to Availability",
            ]}
          />
          <OfferCard
            title="Platinum Paradise Package"
            price="5000"
            description={
              "Our Platinum Paradise Package offers the pinnacle of luxury and exclusivity for the discerning traveler. With our most lavish accommodations, extraordinary culinary experiences, and private transportation, immerse yourself in a world of opulence where your desires are anticipated and fulfilled beyond expectation."
            }
            perks={[
              "Presidential Suite with 360° Ocean and Resort Views",
              "All-Inclusive Premium Dining and Private Chef Options",
              "Helicopter Transfers to and from the Airport",
              "Private Yacht Charter for Half-Day Exploration",
              "Unlimited Spa Treatments and Wellness Consultations",
              "Exclusive Access to VIP Events and Experiences within the Resort",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
