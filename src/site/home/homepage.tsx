import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <section className="sm:ml-64 p-4">
        <Outlet />
      </section>
    </>
  );
};

export default Homepage;
