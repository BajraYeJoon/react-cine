import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { motion } from "framer-motion";

const comingsooninfo = [
  {
    id: 1,
    title: "title 1",
    releaseDate: "30 July",
  },
  {
    id: 2,
    title: "title 2",
    releaseDate: "30 July",
  },
  {
    id: 3,
    title: "title 3",
    releaseDate: "30 July",
  },
  {
    id: 4,
    title: "title 4",
    releaseDate: "30 July",
  },
];

const ComingSoon = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.section className="px-4">
      <h1 className="text-4xl tracking-wide font-medium">Coming Soon</h1>
      <div className="flex  flex-wrap gap-4 mt-4">
        {/* {comingsooninfo.map((item) => (
          <Dialog>
            <DialogTrigger>
              <div className="relative h-56 w-44 bg-foreground/25 rounded-3xl">
                <div className="absolute bottom-4 left-4">
                  <h1 className=" text-xl font-medium">{item.title}</h1>
                  <span>{item.releaseDate}</span>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent>{item.title}</DialogContent>
          </Dialog>
        ))} */}

        <motion.div
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
          className="grid grid-cols-4 grid-rows-5 gap-4 w-full *:bg-foreground/25 *:rounded-2xl"
        >
          <motion.div
            variants={variants}
            className="col-span-2 row-span-2 h-72"
          >
            1
          </motion.div>
          <motion.div variants={variants} className="col-start-1 ">
            2
          </motion.div>
          <motion.div variants={variants} className="col-start-2">
            3
          </motion.div>
          <motion.div variants={variants} className="col-span-3 row-span-2">
            4
          </motion.div>
          <motion.div
            variants={variants}
            className="col-span-2 row-span-3 col-start-3 row-start-1"
          >
            5
          </motion.div>
          <motion.div variants={variants} className="col-start-4 row-start-4">
            6
          </motion.div>
          <motion.div variants={variants} className="col-start-4 row-start-5">
            7
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { ComingSoon };
