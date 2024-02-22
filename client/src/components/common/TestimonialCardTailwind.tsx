type TestimonialCardTailwindProps = {
  name: string;
  photo: string;
  review: string;
};
export default function TestimonialCardTailwind({
  name,
  photo,
  review,
}: TestimonialCardTailwindProps) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={photo}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            January 12, 2024
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {name}.
          </a>
          <p className="mt-2 text-slate-500">{review}</p>
        </div>
      </div>
    </div>
  );
}
