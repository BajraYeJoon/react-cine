import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const features = [
  { id: 1, content: "8k resolutions Trailer" },
  { id: 2, content: "Dolby Atmos/ Dolby HD Vision" },
  { id: 3, content: "HDR10 Support" },
];

const additionalFeatures = [
  { id: 1, content: "Everything from basic" },
  { id: 2, content: "24/7 Support" },
  { id: 3, content: "10 users" },
];

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
    <div className="relative mx-8 mt-12 flex flex-col items-center justify-start gap-4">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="font-display flex max-w-fit items-center justify-center text-2xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
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
      <div className="flex w-full items-center gap-4">
        <img
          src="/sh.png"
          className="hidden object-contain md:block md:h-[500px] md:w-[600px]"
        />
        <motion.div
          className="w-96 rounded-lg border-2 border-foreground px-6 py-8 shadow-lg shadow-foreground"
          variants={container}
        >
          <p className="text-2xl font-medium">Enhanced Pro</p>
          <p className="text-sm font-semibold text-gray-500">
            For your ulimate experience
          </p>
          <p className="mt-3 text-4xl font-bold">$65</p>

          <Link to="/subscribe/billing">
            <Button>Try Now</Button>
          </Link>
          <ul className="mt-4 space-y-2 font-semibold">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-center space-x-4 font-medium"
              >
                <span>{feature.content}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <ul className="space-y-2 font-semibold">
            {additionalFeatures.map((feature) => (
              <li
                key={feature.id}
                className={`sapace-x-2 flex items-center first:text-primary/80`}
              >
                <span>{feature.content}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Subscribe;
