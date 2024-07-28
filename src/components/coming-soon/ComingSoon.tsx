import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { motion } from "framer-motion";
import { fetchUpcomingMoviesFromAPI } from "@/api/fetchapi";
import { ArrowUpWideNarrow, Calendar, Stars } from "lucide-react";

// const gridItems = [
//   {
//     id: 1,
//     className: "col-span-2 row-span-2 h-72",
//     title: "Grid Item 1",
//     releaseDate: "30 July",
//   },
//   {
//     id: 2,
//     className: "col-start-1",
//     title: "Grid Item 2",
//     releaseDate: "30 July",
//   },
//   {
//     id: 3,
//     className: "col-start-2",
//     title: "Grid Item 3",
//     releaseDate: "30 July",
//   },
//   {
//     id: 4,
//     className: "col-span-3 row-span-2",
//     title: "Grid Item 4",
//     releaseDate: "30 July",
//   },
//   {
//     id: 5,
//     className: "col-span-2 row-span-3 col-start-3 row-start-1",
//     title: "Grid Item 5",
//     releaseDate: "30 July",
//   },
//   {
//     id: 6,
//     className: "col-start-4 row-start-4",
//     title: "Grid Item 6",
//     releaseDate: "30 July",
//   },
//   {
//     id: 7,
//     className: "col-start-4 row-start-5",
//     title: "Grid Item 7",
//     releaseDate: "30 July",
//   },
// ];
interface UpcomingMovieProps {
  id: number;
  className: string;
  title: string;
  release_date: string;
  backdrop_path: string;
  overview: string;
  vote_count: number;
  popularity: number;
}

const getClassName = (index: number) => {
  const classNames = [
    "col-span-2 row-span-2",
    "col-start-1",
    "col-start-2",
    "col-span-3 row-span-2",
    "col-span-2 row-span-3 col-start-3 row-start-1",
    "col-start-4 row-start-4",
    "col-start-4 row-start-5",
  ];
  return classNames[index];
};

const ComingSoon = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUpcomingMoviesFromAPI();
      const mappedData = data.map(
        (item: UpcomingMovieProps, index: number) => ({
          ...item,
          className: getClassName(index),
        })
      );
      setUpcomingMovies(mappedData.slice(0, 7));
    };

    fetchData();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section className="px-4">
      <h1 className="text-4xl tracking-wide font-medium">Coming Soon</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: false }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-4 *:overflow-hidden grid-rows-5 gap-4 h-[700px] w-full *:bg-foreground/25 *:rounded-2xl"
        >
          {upcomingMovies.map(
            ({
              id,
              className,
              title,
              release_date,
              vote_count,
              popularity,
              overview,
              backdrop_path,
            }: UpcomingMovieProps) => (
              <motion.div key={id} variants={variants} className={className}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-full w-full">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt={title}
                        className="absolute inset-0 h-full w-full  object-center object-cover "
                      />

                      <h1 className="absolute bottom-0 p-4 z-40 text-2xl tracking-wide leading-none font-medium">
                        {title}
                      </h1>

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90  to-transparent "></div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="p-4 space-y-4">
                      <DialogTitle className="text-4xl tracking-wide ">
                        {title}
                      </DialogTitle>

                      <DialogDescription className="space-y-4 relative">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                          alt={title}
                          className="absolute -top-20 shadow-inner -z-20 opacity-35 rounded-2xl right-0 h-32 w-44   object-center object-cover "
                        />

                        <DialogTitle className="text-xl text-primary">
                          Overview
                        </DialogTitle>
                        <DialogTitle className="text-xl">
                          {overview}
                        </DialogTitle>
                        <span className="inline-flex gap-12">
                          <span className="inline-flex gap-3 text-xl ">
                            <Stars size={20} className="text-yellow-300" />:
                            {vote_count}
                          </span>
                          <span className="text-xl inline-flex gap-3">
                            <ArrowUpWideNarrow
                              size={20}
                              className="text-green-400"
                            />
                            {((Number(popularity) / 10000) * 100).toFixed(2)}%
                          </span>
                          <span className="inline-flex gap-3 text-xl">
                            <Calendar size={20} />:{release_date}
                          </span>
                        </span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export { ComingSoon };
