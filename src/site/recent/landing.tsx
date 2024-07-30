import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { useRecentContext } from "@/context/recently-watched-context";

const Recentlanding = () => {
  const { recentlyWatched } = useRecentContext();

  console.log(recentlyWatched.map((m) => m.vote_average));

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
        {recentlyWatched.map(({ movieDetails }: any) => {
          return (
            <div
              className="relative flex w-44 rounded-xl"
              key={movieDetails.id}
            >
              <div className="absolute right-2 -mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-green-800 to-foreground">
                <HiMiniArrowTrendingUp />
                <p>{movieDetails.vote_average?.toFixed(1)}</p>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
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
