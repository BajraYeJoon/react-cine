import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <section className="mx-8 grid grid-cols-1 items-start md:mx-0 md:grid-cols-2 lg:justify-between">
      <div className="relative hidden h-[90vh] overflow-hidden bg-primary md:block">
        <div className="mx-12 mt-12 max-w-md text-5xl">
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
          className="lg:h-[300px bottom-24 right-28 z-50 scale-[2.5] md:absolute md:h-[300px] md:w-[300px] lg:w-[300px]"
        />
      </div>

      <section className="auth-container flex w-full flex-col items-center justify-center">
        <div className="sign-up-content space-y-0 md:space-y-8">
          <Outlet />
        </div>
      </section>
    </section>
  );
};

export default AuthLayout;
