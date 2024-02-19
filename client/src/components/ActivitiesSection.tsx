import swimming from "../assets/swimming.svg";
import boat from "../assets/boat.svg";
import waterSki from "../assets/water-ski.svg";
import snorkel from "../assets/snorkel.svg";
import eat from "../assets/eat.svg";
import spa from "../assets/spa.svg";
import Activity from "./common/Activity";

export default function ActivitiesSection() {
  return (
    <div
      id="activities-section"
      className="w-full py-[100px] bg-yellow-50 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-[75px] w-[1152px]">
        <div
          id="text-container"
          className="flex flex-col items-center justify-center gap-5"
        >
          <h1 className="text-5xl p-2">Activities</h1>
          <hr className=" w-[350px] h-[2px] bg-yellow-300 border-0 rounded" />
          <div className="flex flex-col gap-3 text-center m-2">
            <p>
              Adventure and relaxation await at Serenity Cove. Whether you're
              seeking serene boat tours, exhilarating water sports, cultural
              excursions, or simply to unwind by the infinity pool, our resort
              offers a plethora of activities tailored to your preferences.
            </p>
          </div>
        </div>
        <div
          id="icons-container"
          className="flex w-[624px] p-3 items-center justify-center gap-x-[100px] gap-y-[50px] flex-wrap"
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
