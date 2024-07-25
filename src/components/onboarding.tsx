import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { useState } from "react";

const genres = ["Action", "Adventure", "Animation", "Comedy"];
const Onboarding = ({ setonboard }: { setonboard: any }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setonboard(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader>Welcome</DialogHeader>
        <DialogDescription className="flex flex-col gap-4">
          Choose some genres to get started
          {genres.map((genre) => (
            <Button key={genre} variant={"secondary"}>
              {genre}
            </Button>
          ))}
        </DialogDescription>
        <Button onClick={handleClick}>Let's go</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;
