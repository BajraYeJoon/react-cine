import { GrNotification } from "react-icons/gr";
import { ModeToggle } from "@/components/global/mode-toggle";
import SearchComponent from "../search/search";
import useWindow from "@/lib/useWindow";
import SubscribeButton from "../Subscribe/subscribeButton";
import Mobilenav from "./mobilenav";
import Badge from "../Settings/badge";
import Navlinkgroup from "./navlinkgroup";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const { dimension }: { dimension: { width: number } } = useWindow();

  return (
    <nav className="navbar sticky start-0 top-0 z-50 w-full bg-card pb-6">
      <div className="navbar-container mx-52 flex items-center justify-center gap-14 pt-4 max-2xl:mx-8 md:pt-6">
        <div className="logo-container flex items-center gap-16">
          <Link to="/" className="flex items-center">
            <span className="self-center text-4xl font-semibold md:text-3xl">
              Cinemax
            </span>
          </Link>
        </div>

        {dimension.width > 768 && <Navlinkgroup />}

        {dimension.width > 764 && (
          <div className="search-bar flex items-center gap-4 lg:gap-6">
            <SearchComponent />
            <SubscribeButton className="hidden lg:block" />
            <GrNotification className="hidden h-6 w-6 lg:block" />
            <ModeToggle />
            <Badge />
          </div>
        )}
      </div>

      <Mobilenav />
    </nav>
  );
};

export default Navbar;
