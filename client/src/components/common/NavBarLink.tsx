import { NavLink } from "react-router-dom";

type NavBarLinkProps = {
  title: string;
  path: string;
};

export default function NavBarLink({ title, path }: NavBarLinkProps) {
  return (
    <li className="hover:text-slate-700 hover:duration-700">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        {title}
      </NavLink>
    </li>
  );
}
