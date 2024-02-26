type TestimonialCardProps = {
  name: string;
  photo: string;
  review: string;
};

export default function TestimonialCard({
  name,
  photo,
  review,
}: TestimonialCardProps) {
  return (
    <div
      id="card-container"
      className="max-w-[406px] min-h-[358px] bg-yellow-50 flex items-center justify-center rounded-md"
    >
      <div
        id="main-container"
        className="flex flex-col items-center justify-center gap-5 w-full mx-[53px] my-[33px]"
      >
        <div
          id="name-picture-container"
          className="flex flex-row items-center justify-center gap-[10px] h-[100px] w-fit"
        >
          <img src={photo} className=" w-24 h-24 rounded-full object-cover" />
          <span className="text-[23px] text-center">{name}</span>
        </div>
        <p
          id="text-container"
          className="text-center leading-tight break-words"
        >
          {review}
        </p>
      </div>
    </div>
  );
}
