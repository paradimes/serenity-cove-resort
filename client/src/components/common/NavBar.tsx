import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <nav className="flex w-[546px] h-[49px] bg-yellow-400 rounded-[30px] px-[50px] py-[13px] z-10">
      <ul
        id="links"
        className="list-none w-full text-white flex flex-row items-center justify-center gap-[30px]"
      >
        <NavBarLink path="/" title="HOME" />
        <NavBarLink path="/about" title="ABOUT US" />
        <NavBarLink path="/accommodations" title="ACCOMMODATIONS" />
        <NavBarLink path="/events" title="EVENTS" />
        {/* OMIT FOR NOW */}
        {/* <NavBarLink path="/events" title="CONTACT" />  */}
      </ul>
    </nav>
  );
}
