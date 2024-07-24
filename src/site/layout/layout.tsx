import { Navbar, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mx-52 mb-28 flex flex-col  max-2xl:mx-6 ">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
