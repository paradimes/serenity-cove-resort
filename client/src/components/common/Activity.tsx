type ActivityProps = {
  title: string;
  icon: string;
};

export default function Activity({ title, icon }: ActivityProps) {
  return (
    <div className="col-span-1 flex flex-col gap-[5px] grid-span">
      <img src={icon} className="h-[80px]" />
      <span className="text-center text-base">{title}</span>
    </div>
  );
}
