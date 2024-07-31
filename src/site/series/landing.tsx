import { fetchBestofTVShows } from "@/api/fetchapi";
import TopRatedPage from "@/components/homeComponents/topRated";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getClassName = (i: number) => {
  const className = [
    "col-span-3 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-3 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-3 row-span-2 col-start-1 row-start-5",
  ];

  return className[i];
};

const Serieslanding = () => {
  const [bestofShows, setBestofShows] = useState([]);

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBestofTVShows();
      const mappedData = data.map((item: any, index: number) => ({
        ...item,
        className: getClassName(index),
      }));
      setBestofShows(mappedData.slice(0, 9));
    };

    fetchData();
  }, []);

  return (
    <section className="my-4 px-4 md:p-0">
      <div className="h-72 gap-3">
        <h1 className="text-2xl font-light md:text-3xl">Top Movies</h1>
        <TopRatedPage showRank swiper isTvShow />
      </div>

      <h2 className="mb-4 text-2xl font-light md:text-3xl">Best of Series</h2>
      <div className="mt-4 flex gap-4">
        <motion.div
          className="grid w-full grid-cols-7 grid-rows-6 gap-4 *:h-44 *:overflow-hidden *:rounded-md *:bg-foreground/25"
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {bestofShows.map(
            ({ poster_path, name, original_name, id, className }: any) => (
              <motion.div variants={variants} className={className} key={id}>
                <div className="relative h-full w-full">
                  <Link to={`/details/${id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt={original_name}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <h1 className="absolute bottom-0 z-40 p-4 text-lg font-medium leading-none tracking-wide">
                      {name}
                    </h1>

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  </Link>
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Serieslanding;
