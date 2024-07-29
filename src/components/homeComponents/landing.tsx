import ProductionCategory from "./ProductionCategory";
import { Button } from "../ui/button";
import ResumeWatch from "./ResumeWatch";
import BannerMovie from "./BannerMovie";
import TopRatedMovies from "./topRated";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <BannerMovie />
        <div className="row-span-3 space-y-5 px-6">
          <h1 className="text-2xl font-semibold">Top Movies</h1>
          <div className="flex flex-col gap-4">
            <TopRatedMovies />
          </div>
          <Button variant={"outline"} className="w-full">
            <Link to={"/movies"}>See All</Link>
          </Button>
        </div>
        <div className="col-span-2">
          <ProductionCategory />
        </div>
      </div>
      <ResumeWatch />
    </>
  );
};
