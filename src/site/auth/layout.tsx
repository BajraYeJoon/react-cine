import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <section className=" grid grid-cols-2 items-start  lg:justify-between">
      <div className="relative bg-primary h-[90vh] overflow-hidden">
        <div className="mx-12 mt-12 text-5xl max-w-md">
          <h1 className="font-extrabold">
            The biggest international and film database
          </h1>
          <p className="text-base leading-tight text-foreground/70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea at sed
            nam doloremque odio possimus nihil deleniti beatae placeat commodi!
          </p>
        </div>
        <img
          src="/public/auth.png"
          alt=""
          className="hidden md:block md:absolute bottom-24 right-28 md:h-[300px] md:w-[300px] scale-[2.5] lg:h-[300px z-50 lg:w-[300px] "
        />
      </div>

      <section className="auth-container  flex w-full flex-col items-center justify-center ">
        <div className="sign-up-content space-y-8">
          <Outlet />
        </div>
      </section>
    </section>
  );
};

export default AuthLayout;
