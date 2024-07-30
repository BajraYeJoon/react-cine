import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../../ui/button";

import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMoviesImages,
  fetchTrailerForMovie,
  fetchWatchProviders,
} from "@/api/fetchapi";
import { MovieInfo } from "./movieInfo";
import { Gallery } from "./gallery";
import { useWatchlist } from "@/context/watchlist-context";
import { useRecentContext } from "@/context/recently-watched-context";

export interface WatchProvider {
  provider_id: number;
  logo_path: string;
}

export interface MovieDetails {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  origin_country: string;
  original_language: string;
  tagline: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  status: string;
  overview: string;
  title: string;
}

export interface MovieCredits {
  id: number;
  profile_path: string;
}

export interface Image {
  file_path: string;
}

export interface Video {
  key: string;
}

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [movieCredits, setMovieCredits] = useState<MovieCredits[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [video, setVideo] = useState<Video[]>([]);
  const [watchProviders, setWatchProviders] = useState<WatchProvider[]>([]);

  const { isinWatchlist, handleAddToWatchlist, handleRemoveFromWatchlist } =
    useWatchlist();
  const { handleRecentWatched } = useRecentContext();

  const fetchData = async (movieId: number) => {
    try {
      const [details, credits, images, videos, watchProviders] =
        await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieCredits(movieId),
          fetchMoviesImages(movieId),
          fetchTrailerForMovie(movieId),
          fetchWatchProviders(movieId),
        ]);

      setMovieDetails(details);
      setMovieCredits(credits.slice(0, 6));
      setImages(images.slice(0, 3));
      setVideo(videos);
      setWatchProviders(watchProviders.flatrate || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  // const addedListId = watchlist.map((movie) => movie.id);

  useEffect(() => {
    const movieId = Number(id);
    if (movieId) {
      fetchData(movieId);
    }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  console.log(movieDetails);

  return (
    <section className="relative">
      <BackdropImage backdropPath={movieDetails.backdrop_path} />
      <div className="absolute z-50 -mt-44 w-full px-12">
        <div className="grid grid-cols-5 grid-rows-6 gap-8">
          <PosterAndWishlist
            posterPath={movieDetails.poster_path}
            movieDetails={movieDetails}
            addWatchList={handleAddToWatchlist}
            // addedintoWatchlist={watchlist}
            isinWatchlist={isinWatchlist(movieDetails.id)}
            removeWatchlist={handleRemoveFromWatchlist}
          />

          <MovieInfo
            movieDetails={movieDetails}
            watchProviders={watchProviders}
          />
          <CastList movieCredits={movieCredits} />
          <Gallery
            images={images}
            video={video}
            addTorecent={() => handleRecentWatched(movieDetails && movieDetails.id)}
          />
        </div>
      </div>
    </section>
  );
};

const BackdropImage = ({ backdropPath }: { backdropPath: string }) => (
  <div className="relative">
    <img
      src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
      alt=""
      className="h-[650px] w-full object-cover object-top"
    />
    <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/90 to-transparent"></div>
  </div>
);

export const PosterAndWishlist = ({
  posterPath,
  movieDetails,
  addWatchList,
  isinWatchlist,
  removeWatchlist,
}: {
  posterPath: string;
  movieDetails: MovieDetails;
  addWatchList?: (movie: MovieDetails) => void;
  // addedintoWatchlist: MovieDetails[];
  isinWatchlist?: boolean;
  removeWatchlist?: (id: number) => void;
}) => (
  <div className="row-span-6 flex flex-col items-center justify-start gap-4 *:w-full *:rounded-none">
    <img src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt="" />

    {!isinWatchlist ? (
      <Button
        variant={"outline"}
        onClick={() => addWatchList && addWatchList(movieDetails)}
      >
        Add to Wishlist
      </Button>
    ) : (
      <Button
        variant={"default"}
        onClick={() => removeWatchlist && removeWatchlist(movieDetails.id)}
      >
        Remove
      </Button>
    )}
  </div>
);

const CastList = ({ movieCredits }: { movieCredits: MovieCredits[] }) => (
  <div className="col-span-4 col-start-2 row-span-2 row-start-5 flex items-center justify-start gap-8">
    {movieCredits.map((cast) => (
      <div key={cast.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
          alt=""
          className="h-44 w-auto rounded-lg bg-foreground/25"
        />
      </div>
    ))}
  </div>
);

export default DetailPage;
