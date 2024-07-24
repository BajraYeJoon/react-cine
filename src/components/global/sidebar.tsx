const menuItems = [
  {
    href: "#",
    text: "Discover",
  },
  {
    href: "#",
    text: "Recently Viewed",
  },
  {
    href: "#",
    text: "Coming Soon",
  },

  {
    href: "/join",
    text: "Join Now",
  },
];

const sidebar = () => {
  const logged = false;

  return (
    <>
      <aside
        className="fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => {
              if (logged && item.href === "/join") {
                return null;
              }

              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {item.text}
                    </span>
                  </a>
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
