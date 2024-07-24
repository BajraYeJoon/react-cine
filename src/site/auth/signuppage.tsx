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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SignUppage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignUppage;
