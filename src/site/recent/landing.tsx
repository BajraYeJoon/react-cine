import { useRecentContext } from "@/context/recently-watched-context";

const Recentlanding = () => {
  const { recentlyWatched } = useRecentContext();

  console.log(recentlyWatched);

  return <div>Recentlanding</div>;
};

export default Recentlanding;
