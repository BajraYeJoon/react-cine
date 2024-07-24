import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const ComingSoon = () => {
  return (
    <section className="px-4">
      <h1 className="text-4xl tracking-wide font-medium">Coming Soon</h1>
      <div className="flex  flex-wrap gap-4 mt-4">
        <Dialog>
          <DialogTrigger>
            <div className="h-56 w-44 bg-foreground/25 rounded-3xl"></div>
          </DialogTrigger>

          <DialogContent>asdfsdf</DialogContent>
        </Dialog>
        <div className="h-56 w-44 bg-foreground/25 rounded-3xl"></div>

        <div className="h-56 w-44 bg-foreground/25 rounded-3xl"></div>

        <div className="h-56 w-44 bg-foreground/25 rounded-3xl"></div>

        <div className="h-56 w-44 bg-foreground/25 rounded-3xl"></div>
      </div>
    </section>
  );
};

export { ComingSoon };
