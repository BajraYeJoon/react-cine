import { GrNotification } from "react-icons/gr";
import { ModeToggle } from "@/components/global/mode-toggle";
import SearchComponent from "../search/search";
import useWindow from "@/lib/useWindow";
import SubscribeButton from "../Subscribe/subscribeButton";
import Mobilenav from "./mobilenav";
import Badge from "../Settings/badge";
import Navlinkgroup from "./navlinkgroup";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

const Navbar = (): JSX.Element => {
  const { dimension }: { dimension: { width: number } } = useWindow();
  const dummyNotifications = [
    { id: 1, message: "New movie added to your watchlist!" },
    { id: 2, message: "Your favorite movie is now available in HD!" },
    {
      id: 3,
      message: "Don't miss the latest episode of your favorite series!",
    },
    { id: 4, message: "Special discount on movie rentals this weekend!" },
    {
      id: 5,
      message: "New genre recommendations based on your watch history!",
    },
  ];

  return (
    <nav className="navbar sticky start-0 top-0 z-50 w-full bg-card md:pb-4">
      <div className="navbar-container mx-52 flex items-center justify-center gap-14 pt-4 max-2xl:mx-8 md:pt-6">
        <div className="logo-container flex items-center gap-16">
          <Link to="/" className="flex items-center">
            <span className="self-center text-4xl font-semibold md:text-3xl">
              Cinemax
            </span>
          </Link>
        </div>

        {dimension.width > 750 && <Navlinkgroup />}

        {dimension.width > 750 && (
          <div className="search-bar flex items-center gap-4 lg:gap-6">
            <SearchComponent />
            <SubscribeButton className="hidden lg:block" />
            <Popover>
              <PopoverTrigger>
                <GrNotification className="hidden h-6 w-6 lg:block" />
              </PopoverTrigger>
              <PopoverContent>
                {dummyNotifications.map((notification) => (
                  <div key={notification.id} className="p-2 text-lg">
                    <p>{notification.message}</p>
                    <Separator />
                  </div>
                ))}
              </PopoverContent>
            </Popover>

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
