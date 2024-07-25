import { BookmarkIcon, Play } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const BannerMovie = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="relative col-span-2 row-span-2 bg-foreground/25 rounded-2xl">
      <motion.div className="absolute bottom-0 m-12 left-0  z-40 flex items-start gap-2 flex-col" 
         initial="hidden"
         animate="show"
         viewport={{ once: true }}
         variants={{
           hidden: {},
           show: {
             transition: {
               staggerChildren: 0.15,
             },
           },
         }}
      >
        <Button variant="secondary">Series</Button>
        <motion.h1 variants={variants} className="text-5xl tracking-wide leading-none font-bold">
          MS.Marvel
        </motion.h1>
        <motion.div variants={variants} className="space-x-3 mb-4">
          <span>1 Season</span>
          <span>Episodes</span>
          <span>Superhero</span>
        </motion.div>

        <motion.div variants={variants} className="inline-flex gap-2">
          <Button className="flex items-center justify-center gap-3 px-7 py-6">
            <Play fill="white" size={16} />
            Watch Trailer
          </Button>

          <Button variant={"ghost"} className="gap-3 px-7 py-6">
            <BookmarkIcon size={16} />
            Add to Watchlist
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerMovie;
