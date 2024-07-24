import { Button } from "@/components/ui/button";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const SignInpage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex flex-col h-full justify-between items-center mt-12 gap-20">
      <h1 className="uppercase text-xl tracking-wide font-bold">cinemax</h1>
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl font-bold text-balance text-center max-w-md">
          Hey there! Welcome back. Sign in to continue.
        </h3>
        <div className="flex flex-col gap-4 ">
          <Button className="gap-4 items-center">
            <FaFacebookF />
            Login With Facebook
          </Button>
          <Button variant={"outline"} className="gap-4 items-center">
            <FaGoogle />
            Login With Google
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
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
              Login
            </Button>
          </form>
        </Form>
        <p className="text-center text-muted-foreground text-sm">
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
