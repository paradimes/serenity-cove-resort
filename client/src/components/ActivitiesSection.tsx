import swimming from "../assets/swimming.svg";
import boat from "../assets/boat.svg";
import waterSki from "../assets/water-ski.svg";
import snorkel from "../assets/snorkel.svg";
import eat from "../assets/eat.svg";
import spa from "../assets/spa.svg";
import Activity from "./common/Activity";
import SectionHeader from "./common/SectionHeader";

export default function ActivitiesSection() {
  return (
    <div
      id="activities-section"
      className="w-full py-[100px] px-[60px] md:px-[120px] bg-yellow-50 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-full">
        <SectionHeader
          title="Activities"
          description="Adventure and relaxation await at Serenity Cove. Whether you're seeking serene boat tours, exhilarating water sports, cultural  excursions, or simply to unwind by the infinity pool, our resort offers a plethora of activities tailored to your preferences."
        />
        <div
          id="icons-container"
          className="grid grid-cols-2  sm:grid-cols-3 p-3 gap-x-[100px] gap-y-[50px]"
        >
          <Activity title="Swimming" icon={swimming} />
          <Activity title="Boat Tours" icon={boat} />
          <Activity title="Water-Skiing" icon={waterSki} />
          <Activity title="Snorkelling" icon={snorkel} />
          <Activity title="Restaurant" icon={eat} />
          <Activity title="Spa" icon={spa} />
        </div>
      </div>
    </div>
  );
}
