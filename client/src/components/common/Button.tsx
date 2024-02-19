type ButtonProps = {
  title: string;
  icon: string;
  height: string;
};

export default function Button({ height, title, icon }: ButtonProps) {
  return (
    <div
      className={` w-56 bg-yellow-400 flex flex-row items-center justify-center gap-2 p-3 rounded-md`}
      style={{ height: `${height}px` }}
    >
      <img src={icon} height={24} />
      <span className="text-white text-md h-6">{title}</span>
    </div>
  );
}
