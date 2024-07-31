import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { useRecentContext } from "@/context/recently-watched-context";

const Recentlanding = () => {
  const { recentlyWatched } = useRecentContext();

  return (
    <section className="space-y-12">
      <div className="text-lg">
        <h1>🎬 Binge Alert!</h1>
        <p>
          Hey, there! You stopped to watch those.{" "}
          <span>Here's a challenge. Go watch 'em all</span> 😜
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {recentlyWatched &&
          recentlyWatched.map(({ id, vote_average, poster_path }: any) => {
            return (
              <div className="relative flex w-24 rounded-xl md:w-44" key={id}>
                <div className="absolute right-2 -mt-8 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-gradient-to-tr from-green-800 to-foreground md:h-12 md:w-12">
                  <HiMiniArrowTrendingUp />
                  <p>{vote_average?.toFixed(1)}</p>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  className="rounded-xl"
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Recentlanding;
