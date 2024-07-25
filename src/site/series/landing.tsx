import TopRatedMovies from "@/components/homeComponents/topRated";
import { motion } from "framer-motion";

const Serieslanding = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  return (
    <section>
      <div className=" h-72 gap-3">
        <h1 className="text-3xl font-medium">Top Movies</h1>
        <TopRatedMovies showRank swiper />
      </div>

      <h2 className="mb-4 text-3xl font-medium">Best of Series</h2>
      <div className="flex gap-4 mt-4 ">
        <motion.div
          className="grid grid-cols-7 w-full grid-rows-6 gap-4 *:h-44 *:bg-foreground/25 *:rounded-md"
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
          <motion.div variants={variants} className="col-span-3 row-span-2">
            1
          </motion.div>
          <motion.div variants={variants} className="col-span-2 row-span-2 ">
            2
          </motion.div>
          <motion.div variants={variants} className="col-span-2 row-span-2 ">
            3
          </motion.div>
          <motion.div variants={variants} className="col-span-2 row-span-2 ">
            4
          </motion.div>
          <motion.div variants={variants} className="col-span-2 row-span-2 ">
            6
          </motion.div>
          <motion.div variants={variants} className="col-span-3 row-span-2 ">
            7
          </motion.div>
          <motion.div variants={variants} className="col-span-4 row-span-2 ">
            8
          </motion.div>
          <motion.div
            variants={variants}
            className="col-span-3 row-span-2 col-start-1 row-start-5"
          >
            9
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Serieslanding;
