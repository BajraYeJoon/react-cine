import { NavLink } from "react-router-dom";
const navLinks = [
  { label: "Movies", href: "/movies" },
  { label: "Series", href: "/series" },
  { label: "Animations", href: "/genre/anime/Animation/16" },
  { label: "Genres", href: "/genre" },
];
const Navlinkgroup = () => {
  return (
    <div className="nav-links flex flex-1 gap-8">
      <ul className="flex text-left font-medium md:mt-0 md:space-x-1 lg:space-x-4">
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="nav-item cursor-pointer">
              <NavLink
                to={link.href}
                end
                className={({ isActive, isPending }) =>
                  `nav-link block px-3 py-1 text-xl font-normal text-foreground ${
                    isPending
                      ? "pending"
                      : isActive
                        ? "active-link border-b-2 border-foreground"
                        : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinkgroup;
