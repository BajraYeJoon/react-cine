import { Button } from "@/components/ui/button";
import { FaFacebookF, FaSpinner } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/context/auth-context";

const formSchema = z.object({
  // email: z.string().email(),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const SignInpage = () => {
  const { login, isLoading } = useAuthContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",

      // email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    login(values);
    toast({
      title: "Login Successful",
    });
    navigate("/onboarding");
  }

  return (
    <section className="mt-12 flex h-full flex-col items-center justify-between gap-20">
      <h1 className="text-xl font-bold uppercase tracking-wide">cinemax</h1>
      <div className="flex flex-col gap-6">
        <h3 className="max-w-md text-balance text-center text-5xl font-bold">
          Hey there! Welcome back. Sign in to continue.
        </h3>
        <div className="flex flex-col gap-4">
          <Button className="items-center gap-4">
            <FaFacebookF />
            Login With Facebook
          </Button>
          <Button variant={"outline"} className="items-center gap-4">
            <FaGoogle />
            Login With Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm uppercase md:text-lg">
            <p className="font-tactic_sans_reg bg-background px-2 text-muted-foreground">
              or Login with...
            </p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {isLoading ? (
                <FaSpinner className="animate-spin" size={20} />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/join" className="text-muted-foreground underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignInpage;
