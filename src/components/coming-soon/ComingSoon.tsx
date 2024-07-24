import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const comingsooninfo = [
  {
    id: 1,
    title: "title 1",
    releaseDate: "30 July",
  },
  {
    id: 2,
    title: "title 2",
    releaseDate: "30 July",
  },
  {
    id: 3,
    title: "title 3",
    releaseDate: "30 July",
  },
  {
    id: 4,
    title: "title 4",
    releaseDate: "30 July",
  },
];

const ComingSoon = () => {
  return (
    <section className="px-4">
      <h1 className="text-4xl tracking-wide font-medium">Coming Soon</h1>
      <div className="flex  flex-wrap gap-4 mt-4">
        {/* {comingsooninfo.map((item) => (
          <Dialog>
            <DialogTrigger>
              <div className="relative h-56 w-44 bg-foreground/25 rounded-3xl">
                <div className="absolute bottom-4 left-4">
                  <h1 className=" text-xl font-medium">{item.title}</h1>
                  <span>{item.releaseDate}</span>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent>{item.title}</DialogContent>
          </Dialog>
        ))} */}

        <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full *:bg-foreground/25 *:rounded-2xl">
          <div className="col-span-2 row-span-2 h-72">1</div>
          <div className="col-start-1 ">2</div>
          <div className="col-start-2">3</div>
          <div className="col-span-3 row-span-2">4</div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-1">5</div>
          <div className="col-start-4 row-start-4">6</div>
          <div className="col-start-4 row-start-5">7</div>
        </div>
      </div>
    </section>
  );
};

export { ComingSoon };
