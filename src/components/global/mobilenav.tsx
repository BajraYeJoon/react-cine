import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Clapperboard, HomeIcon, SlidersHorizontal } from "lucide-react";
import SearchComponent from "../search/search";
import Badge from "../Settings/badge";
import Navlinkgroup from "./navlinkgroup";
import CustomDrawer from "./customdrawer";
import Sidebargroup from "./sidebargroup";

const Mobilenav = () => {
  const [isProfileDrawerOpen, setProfileDrawerOpen] = useState(false);
  const [isOptionsDrawerOpen, setOptionsDrawerOpen] = useState(false);

  return (
    <>
      {/* mobile nav */}
      <div className="mobile-nav-wrapper fixed bottom-0 left-0 z-50 mb-1 h-14 w-full rounded-full border border-primary/75 bg-background md:hidden">
        <div className="mobile-nav-content mx-auto grid h-full max-w-lg grid-cols-5 place-items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            <HomeIcon />
          </NavLink>
          <Clapperboard onClick={() => setProfileDrawerOpen(true)} />
          <div className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-medium hover:bg-primary/25">
            {SearchComponent && <SearchComponent />}
          </div>
          <Badge />
          <SlidersHorizontal onClick={() => setOptionsDrawerOpen(true)} />
        </div>
      </div>

      {/* drawer to open when clicked */}
      <CustomDrawer
        open={isProfileDrawerOpen}
        onOpenChange={setProfileDrawerOpen}
        title="Choose a genre "
        description="What are you interested in?"
      >
        <Navlinkgroup />
      </CustomDrawer>

      <CustomDrawer
        open={isOptionsDrawerOpen}
        onOpenChange={setOptionsDrawerOpen}
        title="Options"
        description="What are you looking for ?"
      >
        <Sidebargroup />
      </CustomDrawer>
    </>
  );
};

export default Mobilenav;