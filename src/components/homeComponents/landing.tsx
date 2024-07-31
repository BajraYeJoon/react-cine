import ProductionCategory from "./ProductionCategory";
import { Button } from "../ui/button";
import ResumeWatch from "./ResumeWatch";
import BannerMovie from "./BannerMovie";
import TopRatedMovies from "./topRated";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:grid-rows-3 md:gap-2">
        <BannerMovie />
        <div className="space-y-5 px-2 md:row-span-3 md:px-6">
          <h1 className="text-3xl font-light md:text-2xl">Top Movies</h1>
          <div className="flex flex-col gap-4">
            <TopRatedMovies />
          </div>
          <Button variant={"outline"} className="w-full">
            <Link to={"/movies"}>See All</Link>
          </Button>
        </div>
        <div className="md:col-span-2">
          <ProductionCategory />
        </div>
      </div>
      <ResumeWatch />
    </>
  );
};
