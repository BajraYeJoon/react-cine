import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Homepage;
