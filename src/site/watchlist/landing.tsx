import { useWatchlist } from "@/context/watchlist-context";
import { Button } from "@/components/ui/button";

const Watchlistlanding = () => {
  const { watchlist, handleRemoveFromWatchlist } = useWatchlist();

  return (
    <section>
      <h1>Your Watchlist</h1>
      <div className="flex flex-wrap gap-3">
        {watchlist.map((watchListitem) => (
          <div className="h-44 w-52 space-y-3" key={watchListitem.id}>
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
      </div>
    </section>
  );
};

export default Watchlistlanding;
