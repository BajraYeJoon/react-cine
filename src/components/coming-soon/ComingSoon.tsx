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
    "lg:col-span-2 lg:row-span-2",
    "lg:col-start-1",
    "lg:col-start-2",
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1",
    "lg:col-start-4 lg:row-start-4",
    "lg:col-start-4 lg:row-start-5",
  ];
  return classNames[index];
};

const ComingSoon = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUpcomingMoviesFromAPI();
      const mappedData = data.map(
        (item: UpcomingMovieProps, index: number) => ({
          ...item,
          className: getClassName(index),
        }),
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
    <section className="mt-4 px-4 md:m-0">
      <h1 className="mb-4 text-2xl font-medium tracking-wide md:text-4xl">
        Coming Soon
      </h1>
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
        className="grid h-[800px] w-full gap-4 *:overflow-hidden *:rounded-2xl *:bg-foreground/25 md:h-[900px] lg:h-[700px] lg:grid-cols-4 lg:grid-rows-5"
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
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <h1 className="absolute bottom-0 z-40 p-4 text-2xl font-medium leading-none tracking-wide">
                      {title}
                    </h1>

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="space-y-4 p-4">
                    <DialogTitle className="text-4xl tracking-wide">
                      {title}
                    </DialogTitle>

                    <DialogDescription className="relative space-y-4">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt={title}
                        className="absolute -top-20 right-0 -z-20 h-32 w-44 rounded-2xl object-cover object-center opacity-35 shadow-inner"
                      />

                      <DialogTitle className="text-xl text-primary">
                        Overview
                      </DialogTitle>
                      <DialogTitle className="text-xl">{overview}</DialogTitle>
                      <span className="inline-flex gap-12">
                        <span className="inline-flex gap-3 text-xl">
                          <Stars size={20} className="text-yellow-300" />:
                          {vote_count}
                        </span>
                        <span className="inline-flex gap-3 text-xl">
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
          ),
        )}
      </motion.div>
    </section>
  );
};

export { ComingSoon };
