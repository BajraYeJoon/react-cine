import { motion } from "framer-motion";
import { Button } from "../ui/button";

function Subscribe() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const words = "Ready to enhance your experience";
  return (
    <div className="relative mt-12 flex flex-col items-center gap-4 h-[100vh] justify-start">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center justify-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        {words.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={item}
            style={{ display: "inline-block", paddingRight: "15px" }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.h1>
      <div className="flex  items-center gap-4 w-full">
        <img src="/sh.png" className="h-[500px] w-[600px] object-contain  " />
        <motion.div
          className="m-10 w-80 rounded-lg border-2 border-foreground py-8 px-6 shadow-lg shadow-foreground"
          variants={container}
        >
          <p className="text-lg font-bold">Enhanced Pro</p>
          <p className="text-sm font-semibold text-gray-500">
            For your ulimate experience
          </p>
          <p className="mt-3 text-4xl font-bold">$65</p>

          <Button>Try Now</Button>
          <ul className="mt-4 space-y-2 font-semibold">
            <li className="flex items-center space-x-4">
              <span>8k resolutions Trailer</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>Dolby Atmos/ Dolby HD Vision</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>HDR10 Support</span>
            </li>
          </ul>
          <hr className="my-4" />
          <ul className="space-y-2 font-semibold">
            <li className="flex items-center space-x-2 text-rose-600">
              <span>Everything from basic</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>24/7 Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>10 users</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Subscribe;
