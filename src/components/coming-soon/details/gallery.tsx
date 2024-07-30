import { PlayCircleIcon } from "lucide-react";
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
} from "../../ui/dialog";
import ReactPlayer from "react-player/lazy";
import { Image, Video } from "./DetailPage";

export const Gallery = ({
  images,
  video,
  addTorecent,
}: {
  images: Image[];
  video: Video[];
  addTorecent: () => void;
}) => {

  return (
    <div className="col-start-5 row-span-4 row-start-1 space-y-4 overflow-hidden">
      <h3 className="text-2xl">Gallery</h3>
      <div className="group relative h-32 bg-foreground/25">
        {images.length > 0 && (
          <img
            src={`https://image.tmdb.org/t/p/original/${images[0].file_path}`}
            className="h-full w-full object-cover opacity-70"
            alt="Movie"
          />
        )}
        <Dialog>
          <DialogTrigger>

            <PlayCircleIcon
              size={40}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/75 group-hover:cursor-pointer"
              onClick={addTorecent}
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Trailer</DialogTitle>

                {video && (
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    controls
                    width="100%"
                    height="100%"
                  />
                )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        slidesPerView={2}
        modules={[Pagination]}
        className="mySwiper h-52"
      >
        {images.map((slide) => (
          <SwiperSlide
            key={slide.file_path}
            className="mb-2 h-full w-full bg-foreground/25"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${slide.file_path}`}
              className="h-full w-full object-cover"
              alt="Slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
