import { Navbar } from "@/components";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
// import Onboarding from "@/components/onboarding";

const Layout = () => {
  // const [onboard, setOnBoard] = useState(true);

  return (
    <>
      {/* {onboard ? (
        <Onboarding setonboard={setOnBoard} />
      ) : ( */}
      <>
        <Navbar />
        <main className="mx-52 mb-28 flex flex-col  max-2xl:mx-6 ">
          <Outlet />
        </main>
      </>
      {/* )} */}
    </>
  );
};

export default Layout;
