type FooterLinksProps = {
  header: string;
  links: string[];
};

export default function FooterLinks({ header, links }: FooterLinksProps) {
  return (
    <div className="w-[260px] flex flex-col gap-8">
      <span className="text-white font-medium">{header}</span>
      <ul className="list-none text-yellow-50 font-light w-fit">
        {links.map((link, index) => (
          <li key={index} className="mb-2 hover:underline hover:cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
