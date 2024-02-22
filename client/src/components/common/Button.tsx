type ButtonProps = {
  title: string;
  icon: string;
  height: string;
};

export default function Button({ height, title, icon }: ButtonProps) {
  return (
    <div
      className={`px-[48px] bg-yellow-400 flex flex-row items-center justify-center gap-2 py-3 rounded-md
      hover:bg-yellow-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300
      `}
      style={{ height: `${height}px` }}
    >
      <img src={icon} height={24} />
      <span className="text-white text-md h-6">{title}</span>
    </div>
  );
}
