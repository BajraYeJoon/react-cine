import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../ui/button";

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

export interface WatchProvider {
  provider_id: number;
  logo_path: string;
}

export interface MovieDetails {
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
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [movieCredits, setMovieCredits] = useState<MovieCredits[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [video, setVideo] = useState<Video | null>(null);
  const [watchProviders, setWatchProviders] = useState<WatchProvider[]>([]);

  const { watchlist, handleAddToWatchlist } = useWatchlist();

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
      setVideo(videos.length > 0 ? videos[0] : null);
      setWatchProviders(watchProviders.flatrate || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  console.log(watchlist);

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

  return (
    <section className="relative">
      <BackdropImage backdropPath={movieDetails.backdrop_path} />
      <div className="absolute -mt-44 z-50 w-full px-12">
        <div className="grid grid-cols-5 grid-rows-6 gap-8">
          <PosterAndWishlist
            posterPath={movieDetails.poster_path}
            movieDetails={movieDetails}
            addWatchList={handleAddToWatchlist}
            addedintoWatchlist={watchlist}
          />

          <MovieInfo
            movieDetails={movieDetails}
            watchProviders={watchProviders}
          />
          <CastList movieCredits={movieCredits} />
          <Gallery images={images} video={video} />
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
    <div className="absolute inset-0 bg-gradient-to-t from-background/90 z-20 to-transparent"></div>
  </div>
);

const PosterAndWishlist = ({
  posterPath,
  movieDetails,
  addWatchList,
  addedintoWatchlist,
}: {
  posterPath: string;
  movieDetails: MovieDetails;
  addWatchList: (movie: MovieDetails) => void;
  addedintoWatchlist: MovieDetails[];
}) => (
  <div className="row-span-6 flex gap-4 flex-col items-center justify-start *:w-full *:rounded-none">
    <img src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt="" />

    <Button variant={"outline"} onClick={() => addWatchList(movieDetails)}>
      Add to Wishlist
    </Button>
  </div>
);

const CastList = ({ movieCredits }: { movieCredits: MovieCredits[] }) => (
  <div className="col-span-4 row-span-2 col-start-2 items-center justify-start flex gap-8 row-start-5">
    {movieCredits.map((cast) => (
      <div key={cast.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
          alt=""
          className="w-auto h-44 rounded-lg bg-foreground/25"
        />
      </div>
    ))}
  </div>
);

export default DetailPage;
