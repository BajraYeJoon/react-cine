import { Separator } from "../../ui/separator";
import { Calendar, Clock, Vote } from "lucide-react";
import { Button } from "../../ui/button";
import { MovieDetails, WatchProvider } from "./DetailPage";

export const MovieInfo = ({
  movieDetails,
  watchProviders,
}: {
  movieDetails: MovieDetails;
  watchProviders: WatchProvider[];
}) => (
  <div className="-order-2 flex flex-col items-start justify-start gap-1 md:order-none md:col-span-3 md:row-span-4 md:gap-5">
    <div className="flex items-center gap-2 md:gap-3">
      <h1 className="text-2xl md:text-4xl">{movieDetails.original_title}</h1>
      <p className="rounded-3xl border border-foreground/45 bg-background/55 px-2 py-1 text-sm uppercase md:px-4 md:text-lg">
        {movieDetails.origin_country} - {movieDetails.original_language}
      </p>
    </div>
    <h2 className="text-lg text-foreground/55 md:text-2xl">
      {movieDetails.tagline}
    </h2>
    <Separator />
    <div className="my-4 flex flex-wrap items-center gap-4 text-lg md:my-0 md:gap-8">
      <p className="inline-flex gap-2">
        <Calendar />
        {movieDetails.release_date}
      </p>
      <p className="inline-flex gap-2">
        <Clock />
        {movieDetails.runtime} mins
      </p>
      <p className="inline-flex gap-2">
        <Vote />
        {movieDetails.vote_average}
      </p>
      <Button variant={"default"} className="px-4 text-base">
        {movieDetails.status}
      </Button>
    </div>
    <Separator />
    <div className="flex flex-col gap-3 md:gap-4">
      <h2 className="text-xl font-bold md:text-2xl">Details</h2>
      <p className="text-sm font-light md:text-lg">{movieDetails.overview}</p>
      <WatchProviders watchProviders={watchProviders} />
    </div>
  </div>
);

const WatchProviders = ({
  watchProviders,
}: {
  watchProviders: WatchProvider[];
}) => (
  <div className="space-y-2">
    <h2 className="text-lg font-bold md:text-xl">Watch it on</h2>
    <div className="flex gap-4">
      {watchProviders.length > 0 ? (
        watchProviders.map((provider) => (
          <div key={provider.provider_id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
              alt=""
              className="h-12 object-scale-down"
            />
          </div>
        ))
      ) : (
        <p className="font-light italic text-foreground/75">
          Only available in Theaters for Now
        </p>
      )}
    </div>
  </div>
);
