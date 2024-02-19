import Button from "./Button";
import flightIcon from "../../assets/flight-icon.svg";

type OfferCardProps = {
  title: string;
  description: string;
  price: string;
  perks: string[];
};

export default function OfferCard({
  title,
  description,
  price,
  perks,
}: OfferCardProps) {
  return (
    <div
      id="card-container"
      className="w-[406px] min-h-[591px] bg-yellow-100 flex items-center justify-center rounded-md px-[38px] py-[50px]"
    >
      <div
        id="main-container"
        className="flex flex-col items-center justify-center gap-[29px] w-full"
      >
        <span id="card-title" className="text-[26px] text-center font-medium">
          {title}
        </span>
        <div id="card-price" className="">
          <p className="text-[11px]">
            <span className="text-[33px] font-medium text-yellow-600">
              ${price}{" "}
            </span>
            per night
          </p>
        </div>
        <p
          id="card-description"
          className="w-full text-[11px] font-medium text-center leading-tight break-words"
        >
          {description}
        </p>
        <hr className=" w-[200px] h-[2px] bg-yellow-300 border-0 rounded" />
        <h6 id="card-perks" className="text-[19px] font-medium">
          Perks and Inclusions
        </h6>
        <ul
          id="card-perks-list"
          className="w-[285px] text-[11px] font-medium text-left list-disc list-outside leading-snug break-words"
        >
          {perks.map((perk, index) => (
            <li key={index} className="mx-[1em]">
              {perk}
            </li>
          ))}
        </ul>
        <Button height="40" icon={flightIcon} title="Book now" />
      </div>
    </div>
  );
}
