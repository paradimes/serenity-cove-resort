import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <nav className="flex  h-[49px] bg-yellow-400 rounded-[30px] px-[30px] md:px-[50px] py-[13px] z-10">
      <ul
        id="links"
        className="list-none w-full text-white flex flex-row items-center justify-center gap-[10px] sm:gap-[30px] text-nowrap"
      >
        <NavBarLink responsiveTitle="HOME" path="/" title="HOME" />
        <NavBarLink responsiveTitle="ABOUT" path="/about" title="ABOUT US" />
        <NavBarLink
          responsiveTitle="ROOMS"
          path="/accommodations"
          title="ACCOMMODATIONS"
        />
        <NavBarLink responsiveTitle="EVENTS" path="/events" title="EVENTS" />
        <NavBarLink responsiveTitle="BOOK" path="/book" title="BOOK" />
      </ul>
    </nav>
  );
}
