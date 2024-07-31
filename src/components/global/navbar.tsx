import { lazy, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GrNotification } from "react-icons/gr";
import { ModeToggle } from "@/components/global/mode-toggle";
import SearchComponent from "../search/search";
import { useAuthContext } from "@/context/auth-context";
import useWindow from "@/lib/useWindow";
import SubscribeButton from "../Subscribe/subscribeButton";
import Mobilenav from "./mobilenav";

const navLinks = [
  { label: "Movies", href: "/movies" },
  { label: "Series", href: "/series" },
  { label: "Animations", href: "/genre/anime/Animation/16" },
  { label: "Genres", href: "/genre" },
];

const Navbar = () => {
  const { isLoggedIn } = useAuthContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { dimension } = useWindow();

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="navbar sticky start-0 top-0 z-50 w-full bg-card pb-6">
      <div className="navbar-container mx-52 flex items-center justify-center gap-14 pt-4 max-2xl:mx-8 md:pt-6">
        <div className="logo-container flex items-center gap-16">
          <Link to="/" className="flex items-center">
            <span className="self-center text-3xl font-semibold">Cinemax</span>
          </Link>
        </div>

        {dimension.width > 768 && (
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
        )}

        {dimension.width > 764 && (
          <div className="search-bar flex items-center gap-4 lg:gap-6">
            <SearchComponent />

            <SubscribeButton className="hidden lg:block" />

            <GrNotification className="hidden h-6 w-6 lg:block" />

            <ModeToggle />

            {isLoggedIn && (
              <Link to={`/settings`}>
                <div className="profile-badge h-6 w-6 cursor-pointer overflow-hidden rounded-full bg-primary"></div>
              </Link>
            )}
            <div className="mobile-nav-toggle flex items-center md:hidden">
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="menu-toggle"
              >
                {!toggleMenu ? (
                  <RxHamburgerMenu className="close-icon h-6" />
                ) : (
                  <RxCross2 className="menu-icon h-6" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        className={cn(
          "mobile-nav bottom-0 z-40 flex w-full origin-top flex-col gap-12 overflow-hidden bg-foreground duration-700 lg:hidden",
          !toggleMenu ? "h-0" : "h-full",
        )}
      >
        <div className="mobile-nav-menu flex flex-col gap-8 px-4 py-4 font-bold tracking-wider">
          <ul className="nav-menu flex flex-col font-medium md:mt-0 md:flex-row md:space-x-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="nav-item nav-link my-2 block font-normal text-background"
              >
                <Link to={link.href} onClick={handleLinkClick}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Mobilenav />
    </nav>
  );
};

export default Navbar;
