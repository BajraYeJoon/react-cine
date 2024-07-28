import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMoviesImages,
} from "@/api/fetchapi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Calendar, Clock, PlayCircleIcon, Vote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [details, credits, images] = await Promise.all([
          fetchMovieDetails(Number(id)),
          fetchMovieCredits(Number(id)),
          fetchMoviesImages(Number(id)),
        ]);
        setMovieDetails(details);
        setMovieCredits(credits.slice(0, 6));
        setImages(images.slice(0, 3)); // Correctly set the images state
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(images);

  return (
    <section className="relative">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
          alt=""
          className="h-[650px] w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 z-20 to-transparent "></div>
      </div>

      <div className="absolute -mt-44 z-50 w-full px-12">
        <div className="grid grid-cols-5 grid-rows-6 gap-8    ">
          <div className="row-span-6 flex gap-4 flex-col items-center justify-start *:w-full *:rounded-none">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt=""
            />
            <Button variant={"outline"}>Add to Wishlist</Button>
          </div>
          <div className="col-span-3 row-span-4 flex flex-col items-start justify-start gap-5">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl">{movieDetails.original_title}</h1>
              <p className="text-lg uppercase px-4 py-1 border border-foreground/45 rounded-3xl bg-background/55">
                {movieDetails.origin_country} - {movieDetails.original_language}
              </p>
            </div>
            <h2 className="text-2xl  text-foreground/55">
              {movieDetails.tagline}
            </h2>

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
          </div>
          <div className="col-span-4 row-span-2 col-start-2 items-center justify-start   flex gap-8 row-start-5">
            {movieCredits.map((cast) => {
              return (
                <div key={cast.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    alt=""
                    className="w-auto h-44 rounded-lg bg-foreground/25"
                  />
                </div>
              );
            })}
          </div>
          <div className="row-span-4 space-y-4 col-start-5   overflow-hidden row-start-1">
            <h3 className="text-2xl">Gallery</h3>
            <div className="h-32 bg-foreground/25 relative group">
              <img
                src={`https://image.tmdb.org/t/p/original/${images[0].file_path}`}
                className="h-full w-full object-cover opacity-70 "
              />
              <Dialog>
                <DialogTrigger>
                  <PlayCircleIcon
                    size={40}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/75 group-hover:cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>adfad</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              slidesPerView={2}
              modules={[Pagination]}
              className="mySwiper h-52"
            >
              {images.map((slide) => (
                <SwiperSlide
                  key={slide.file_path} // Use file_path as the unique key
                  className="h-full bg-foreground/25 w-full mb-2"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${slide.file_path}`}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
