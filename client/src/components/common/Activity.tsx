type ActivityProps = {
  title: string;
  icon: string;
};

export default function Activity({ title, icon }: ActivityProps) {
  return (
    <div className="flex flex-col gap-[5px]">
      <img src={icon} className="h-[80px]" />
      <span className="text-center text-base">{title}</span>
    </div>
  );
}
