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
} from "../ui/dialog";
import ReactPlayer from "react-player/lazy";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { Image, Video } from "./DetailPage";

export const Gallery = ({
  images,
  video,
}: {
  images: Image[];
  video: Video | null;
}) => (
  <div className="row-span-4 space-y-4 col-start-5 overflow-hidden row-start-1">
    <h3 className="text-2xl">Gallery</h3>
    <div className="h-32 bg-foreground/25 relative group">
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/75 group-hover:cursor-pointer"
          />
        </DialogTrigger>
        <DialogContent>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Trailer</DialogTitle>
            </DialogHeader>
            <DialogOverlay className="relative h-[500px] w-full">
              {video && (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.key}`}
                  controls
                  width="100%"
                  height="100%"
                />
              )}
            </DialogOverlay>
          </DialogContent>
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
          className="h-full bg-foreground/25 w-full mb-2"
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
