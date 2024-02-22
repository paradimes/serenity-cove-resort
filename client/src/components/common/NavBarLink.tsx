import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type NavBarLinkProps = {
  title: string;
  responsiveTitle: string;
  path: string;
};

export default function NavBarLink({
  title,
  responsiveTitle,
  path,
}: NavBarLinkProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li className="hover:text-slate-700 hover:duration-700">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        {windowWidth >= 576 ? title : responsiveTitle}
      </NavLink>
    </li>
  );
}
