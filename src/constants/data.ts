import { Bookmark, Clock, LogOutIcon, SettingsIcon, Timer } from "lucide-react";
import { SiDiscover } from "react-icons/si";

export const menuItems = [
  {
    text: "Menu",
    subMenu: [
      {
        href: "/",
        text: "Discover",
        icon: SiDiscover,
      },
      {
        href: "/coming-soon",
        text: "Coming Soon",
        icon: Timer,
      },
    ],
  },
  {
    text: "Library",
    subMenu: [
      {
        href: "/recently-viewed",
        text: "Recently Viewed",
        icon: Clock,
      },
      {
        href: "/watchlist",
        text: "Watchlist",
        icon: Bookmark,
      },
      {
        href: "/settings",
        text: "Settings",
        icon: SettingsIcon,
      },
      {
        href: "/join",
        text: "Join Now",
        icon: LogOutIcon,
      },
    ],
  },
];
