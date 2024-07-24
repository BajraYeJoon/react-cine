import { BookmarkIcon, Play } from "lucide-react";
import { Button } from "../ui/button";
const BannerMovie = () => {
  return (
    <div className="relative col-span-2 row-span-2 bg-foreground/25 rounded-2xl">
      <div className="absolute bottom-0 m-12 left-0  z-40 flex items-start gap-2 flex-col">
        <Button variant="secondary">Series</Button>
        <h1 className="text-5xl tracking-wide leading-none font-bold">
          MS.Marvel
        </h1>
        <div className="space-x-3 mb-4">
          <span>1 Season</span>
          <span>Episodes</span>
          <span>Superhero</span>
        </div>

        <div className="inline-flex gap-2">
          <Button className="flex items-center justify-center gap-3 px-7 py-6">
            <Play fill="white" size={16} />
            Watch Trailer
          </Button>

          <Button variant={"ghost"} className="gap-3 px-7 py-6">
            <BookmarkIcon size={16} />
            Add to Watchlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerMovie;
