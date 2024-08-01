import { useWatchlist } from "@/context/watchlist-context";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/auth-context";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import Fiber from "@/components/test/fiber";

const Watchlistlanding = () => {
  const { watchlist, handleRemoveFromWatchlist } = useWatchlist();
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  //     hidden: { opacity: 0, y: 10 },
  //     show: { opacity: 1, y: 0, transition: { type: "spring" } },
  //   };

  const FADE_UP_ANIMATION = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <section>
      {isLoggedIn ? (
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={FADE_UP_ANIMATION}
            className="mb-2 text-2xl font-light md:text-4xl"
          >
            Your Watchlist
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={FADE_UP_ANIMATION}
          >
            {watchlist.map((watchListitem) => (
              <div
                className="h-24 w-24 space-y-3 md:h-44 md:w-52"
                key={watchListitem.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${watchListitem.poster_path}`}
                  alt=""
                />

                <Button
                  variant={"default"}
                  className="w-full rounded-none"
                  onClick={() => handleRemoveFromWatchlist(watchListitem.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="flex min-h-[75dvh] flex-col items-center justify-center space-y-4 text-xl"
        >
          {/* <Fiber /> */}
          <motion.p variants={FADE_UP_ANIMATION}>
            Please login to see your watchlist
          </motion.p>
          <motion.p variants={FADE_UP_ANIMATION}>
            Access your personalized watchlist and keep track of your favorite
            movies and shows.
          </motion.p>
          <Button onClick={() => navigate("/signin")}>Login</Button>
        </motion.div>
      )}
    </section>
  );
};

export default Watchlistlanding;

// export function FadeUpStagger() {
//   const FADE_UP_ANIMATION_VARIANTS = {
//     hidden: { opacity: 0, y: 10 },
//     show: { opacity: 1, y: 0, transition: { type: "spring" } },
//   };
//   return (
//     <motion.div
//       initial="hidden"
//       animate="show"
//       viewport={{ once: true }}
//       variants={{
//         hidden: {},
//         show: {
//           transition: {
//             staggerChildren: 0.15,
//           },
//         },
//       }}
//     >
//       <motion.h1
//         className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
//         variants={FADE_UP_ANIMATION_VARIANTS}
//       >
//         Fade Up
//       </motion.h1>
//       <motion.p
//         className="mt-6 text-center md:text-2xl"
//         variants={FADE_UP_ANIMATION_VARIANTS}
//       >
//         Animation Preview
//       </motion.p>
//       <motion.div
//         className="mx-auto mt-6 flex items-center justify-center space-x-5"
//         variants={FADE_UP_ANIMATION_VARIANTS}
//       >
//         <HeartFilledIcon />
//       </motion.div>
//     </motion.div>
//   );
// }
// Multi Direction Slide
