type ButtonProps = {
  title: string;
  icon: string;
};

export default function Button({ title, icon }: ButtonProps) {
  return (
    <div className=" w-56 h-14 bg-yellow-400 flex flex-row items-center justify-center gap-2 p-3 rounded-md">
      <img src={icon} height={24} />
      <span className="text-white text-md h-6">{title}</span>
    </div>
  );
}
