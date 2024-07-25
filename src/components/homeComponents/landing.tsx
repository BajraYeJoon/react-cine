import ProductionCategory from "./ProductionCategory";
import { Button } from "../ui/button";
import ResumeWatch from "./ResumeWatch";
import BannerMovie from "./BannerMovie";
import TopRatedMovies from "./topRatedMovies";

export const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
        <BannerMovie />
        <div className="row-span-3 px-6 space-y-5 ">
          <h1 className="text-2xl font-semibold">Top Movies</h1>
          <div className="flex flex-col gap-4">
            <TopRatedMovies />
          </div>
          <Button variant={"outline"} className="w-full">
            See All
          </Button>
        </div>
        <div className="col-span-2 ">
          <ProductionCategory />
        </div>
      </div>
      <ResumeWatch />
    </>
  );
};
