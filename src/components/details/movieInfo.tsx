import { Separator } from "../ui/separator";
import { Calendar, Clock, Vote } from "lucide-react";
import { Button } from "../ui/button";
import { MovieDetails, WatchProvider } from "./DetailPage";

export const MovieInfo = ({
  movieDetails,
  watchProviders,
}: {
  movieDetails: MovieDetails;
  watchProviders: WatchProvider[];
}) => (
  <div className="col-span-3 row-span-4 flex flex-col items-start justify-start gap-5">
    <div className="flex items-center gap-3">
      <h1 className="text-4xl">{movieDetails.original_title}</h1>
      <p className="text-lg uppercase px-4 py-1 border border-foreground/45 rounded-3xl bg-background/55">
        {movieDetails.origin_country} - {movieDetails.original_language}
      </p>
    </div>
    <h2 className="text-2xl text-foreground/55">{movieDetails.tagline}</h2>
    <Separator />
    <div className="flex text-lg gap-8 items-center">
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
      <Button variant={"default"}>{movieDetails.status}</Button>
    </div>
    <Separator />
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Details</h2>
      <p className="text-lg">{movieDetails.overview}</p>
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
    <h2 className="text-xl font-bold">Watch it on</h2>
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
        <p>Only available in Theaters for Now</p>
      )}
    </div>
  </div>
);
