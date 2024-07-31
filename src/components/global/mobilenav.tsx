import { useMediaQuery } from "@/lib/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import Sidebar from "./sidebar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  //   DrawerTrigger,
} from "@/components/ui/drawer";
import SearchComponent from "../search/search";
import {
  CircleUser,
  Clapperboard,
  HomeIcon,
  Settings,
  SettingsIcon,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

const Mobilenav = () => {
  const [open, setOpen] = useState(false);
  //   const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <Sidebar />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700 md:hidden">
        <div className="mx-auto grid h-full max-w-lg grid-cols-5 place-items-center">
          <HomeIcon />

          <Clapperboard onClick={() => setOpen(true)} />
          <div className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-medium hover:bg-primary/25">
            <SearchComponent />
          </div>

          <Link to={`/settings`}>
            <CircleUser />
          </Link>

          <SlidersHorizontal />
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
