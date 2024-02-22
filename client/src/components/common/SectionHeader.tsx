type SectionHeaderProps = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div
      id="text-container"
      className="max-w-[1132px] flex flex-col items-center justify-center gap-5 border-2 border-black text-center"
    >
      <h1 className="text-5xl p-2">{title}</h1>
      <hr className=" w-[350px] h-[2px] bg-yellow-300 border-0 rounded" />
      <div className="flex flex-col gap-3 text-center m-2">
        <p>{description}</p>
      </div>
    </div>
  );
}
