import Sidebargroup from "./sidebargroup";

const Sidebar = () => {
  return (
    <>
      <aside
        className="fixed hidden h-screen -translate-x-full transition-transform sm:translate-x-0 md:flex"
        aria-label="Sidebar"
      >
        <div className="mx-3 flex h-[90vh] w-56 flex-col justify-between bg-primary-foreground/10 px-3 py-4">
          <Sidebargroup />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
