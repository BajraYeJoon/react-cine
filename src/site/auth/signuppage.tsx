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

const SignUppage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

 

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <section className="mt-12 flex h-full flex-col items-center justify-between gap-2 md:gap-20">
      <h1 className="hidden text-xl font-bold uppercase tracking-wide md:block">
        cinemax
      </h1>
      <div className="flex flex-col gap-6">
        <h3 className="max-w-md text-balance text-center text-5xl font-bold">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col gap-4">
          <Button className="items-center gap-4">
            <FaFacebookF />
            Sign Up With Facebook
          </Button>
          <Button variant={"outline"} className="items-center gap-4">
            <FaGoogle />
            Sign Up With Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm uppercase md:text-lg">
            <p className="font-tactic_sans_reg bg-background px-2 text-muted-foreground">
              or sign up with...
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
                  <FormLabel className="text-lg">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>{" "}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
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
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-muted-foreground">
          Already a member?{" "}
          <Link to="/sign-in" className="text-muted-foreground underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUppage;
