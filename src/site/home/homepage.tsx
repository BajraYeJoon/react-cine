import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <section className="p-4 sm:ml-64">
        <Outlet />
      </section>
    </>
  );
};

export default Homepage;
