import { NavLink } from "react-router-dom";

type FooterLinksProps = {
  header: string;
  links: object;
};

export default function FooterLinks({ header, links }: FooterLinksProps) {
  return (
    <div className="w-[260px] flex flex-col gap-8">
      <span className="text-white font-medium">{header}</span>
      <ul className="list-none text-yellow-50 font-light w-fit">
        {Object.values(links).map((link, index) => (
          <li key={index} className="mb-2 hover:underline hover:cursor-pointer">
            <NavLink to={link.path}>{link.linkTitle}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
