import { useState } from "react";
import { Link } from "react-router-dom";
import { Clapperboard, HomeIcon, SlidersHorizontal } from "lucide-react";
import SearchComponent from "../search/search";
import Badge from "../Settings/badge";
import Navlinkgroup from "./navlinkgroup";
import CustomDrawer from "./customdrawer";

const Mobilenav = () => {
  const [isProfileDrawerOpen, setProfileDrawerOpen] = useState(false);
  const [isOptionsDrawerOpen, setOptionsDrawerOpen] = useState(false);


  return (
    <>
      {/* mobile nav */}
      <div className="mobile-nav-wrapper fixed bottom-0 left-0 z-50 mb-1 h-14 w-full rounded-full border border-primary/75 bg-background md:hidden">
        <div className="mobile-nav-content mx-auto grid h-full max-w-lg grid-cols-5 place-items-center">
          <Link to="/">
            <HomeIcon />
          </Link>
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
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
      >
        <Navlinkgroup />
      </CustomDrawer>

      <CustomDrawer
        open={isOptionsDrawerOpen}
        onOpenChange={setOptionsDrawerOpen}
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
      >
        <div>Options content goes here</div>
      </CustomDrawer>
    </>
  );
};

export default Mobilenav;