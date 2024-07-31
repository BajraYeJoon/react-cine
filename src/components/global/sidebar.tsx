import { menuItems } from "@/constants/data";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuthContext } from "@/context/auth-context";
import { Button } from "../ui/button";
import SubscribeButton from "../Subscribe/subscribeButton";

const Sidebar = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <aside
        className="fixed hidden h-screen w-64 -translate-x-full transition-transform sm:translate-x-0 md:flex"
        aria-label="Sidebar"
      >
        <div className="flex h-[90vh] flex-col justify-between bg-primary-foreground/10 px-3 py-4">
          <ul className="space-y-8 text-xl font-medium">
            {menuItems.map((item, index) => {
              return (
                <li key={index} className="text-xl font-normal tracking-wide">
                  <span className="group flex items-center p-2 uppercase tracking-wider text-foreground/90">
                    {item.text}
                  </span>
                  <ul className="">
                    {item.subMenu.map((subItem, subIndex) => {
                      const Icon = subItem.icon;

                      if (isLoggedIn && subItem.href === "/join") {
                        return null;
                      }

                      return (
                        <li key={subIndex} className="text-foreground/70">
                          <NavLink
                            to={subItem.href}
                            className={({ isActive, isPending }) =>
                              `nav-link group ms-1 flex items-center p-2 hover:text-foreground/90 ${
                                isPending
                                  ? "pending"
                                  : isActive
                                    ? "active-link border-l-4 border-primary bg-foreground/10"
                                    : ""
                              }`
                            }
                          >
                            {<Icon className={cn("me-2 h-5 w-5")} />}

                            <p className="flex-1 font-light">{subItem.text}</p>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <SubscribeButton className="w-full rounded-sm lg:hidden" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
