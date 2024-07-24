import { StarIcon } from "lucide-react";
import { TbMovie } from "react-icons/tb";
import ProductionCategory from "./ProductionCategory";
import { Button } from "../ui/button";
import ResumeWatch from "./ResumeWatch";
import BannerMovie from "./BannerMovie";

const items = [
  {
    id: 1,
    category: "pg 1",
    name: "name 1 adfasdfasdfasdfasdfasdfasdfasdfasdf",
    genre: "genre 1",
    rating: 8.2,
  },
  { id: 2, category: "pg 2", name: "name 2", genre: "genre 2", rating: 7.5 },
  { id: 3, category: "pg 3", name: "name 3", genre: "genre 3", rating: 9.0 },
  { id: 4, category: "pg 4", name: "name 4", genre: "genre 4", rating: 8.8 },
];
export const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
        <BannerMovie />
        <div className="row-span-3 px-6 space-y-5 ">
          <h1 className="text-2xl font-semibold">Top Movies</h1>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-2 gap-8">
                <div className="h-28 items-center rounded-3xl bg-foreground/25"></div>
                <div className="flex flex-col justify-center ">
                  <span className="uppercase text-sm text-foreground/50">
                    {item.category}
                  </span>
                  <h4 className="text-xl capitalize text-nowrap">
                    {item.name.length > 10
                      ? item.name.slice(0, 14) + "..."
                      : item.name}
                  </h4>
                  <span className="opacity-30 inline-flex items-center gap-2">
                    <TbMovie />
                    {item.genre}
                  </span>
                  <span className="flex items-center text-center w-fit gap-2 text-lg">
                    <StarIcon size={16} fill="yellow" />
                    {item.rating}
                  </span>
                </div>
              </div>
            ))}
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
