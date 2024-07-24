import { Button } from "@/components/ui/button";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const SignUppage = () => {
  return (
    <section className="flex flex-col h-full justify-between items-center mt-12 gap-24">
      <h1 className="uppercase text-xl tracking-wide font-bold">cinemax</h1>
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl font-bold text-balance text-center max-w-md">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col gap-4 ">
          <Button className="gap-4 items-center">
            <FaFacebookF />
            Sign Up With Facebook
          </Button>
          <Button variant={"outline"} className="gap-4 items-center">
            <FaGoogle />
            Sign Up With Google
          </Button>
        </div>
        <div className="relative ">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm uppercase md:text-lg">
            <p className="bg-background px-2 font-tactic_sans_reg text-muted-foreground">
              or sign up with...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUppage;
