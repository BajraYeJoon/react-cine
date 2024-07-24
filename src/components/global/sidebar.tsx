import { menuItems } from "@/constants/data";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const sidebar = () => {
  const logged = false;

  return (
    <>
      <aside
        className="fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  bg-primary-foreground/10">
          <ul className="space-y-8 text-xl font-medium">
            {menuItems.map((item, index) => {
              if (
                logged &&
                item.subMenu.find((subItem) => subItem.href === "/join")
              ) {
                return null;
              }

              return (
                <li key={index} className=" font-normal tracking-wide text-xl">
                  <span className="uppercase tracking-wider flex text-foreground/90 items-center p-2   group">
                    {item.text}
                  </span>
                  <ul className="">
                    {item.subMenu.map((subItem, subIndex) => {
                      const Icon = subItem.icon;

                      return (
                        <li key={subIndex} className="text-foreground/70">
                          <NavLink
                            to={subItem.href}
                            className={({ isActive, isPending }) =>
                              `nav-link flex items-center hover:text-foreground/90 p-2 ms-1 group  ${
                                isPending
                                  ? "pending"
                                  : isActive
                                  ? "active-link border-l-4 border-primary bg-foreground/10"
                                  : ""
                              }`
                            }
                          >
                            {<Icon className={cn("w-5 h-5 me-2 ")} />}

                            <p className="flex-1 font-light  ">
                              {subItem.text}
                            </p>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default sidebar;
