import { NavLink } from "react-router-dom";

type NavBarLinkProps = {
  title: string;
  path: string;
};

export default function NavBarLink({ title, path }: NavBarLinkProps) {
  return (
    <li className="hover:font-bold">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "font-extrabold " : "")}
      >
        {title}
      </NavLink>
    </li>
  );
}
