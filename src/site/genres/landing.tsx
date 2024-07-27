import { fetchMoviesWithGenreType } from "@/api/fetchapi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Genrelanding = () => {
  const [filteredGenreList, setFilteredGenreList] = useState<any[]>([]);
  const { genreName, id } = useParams<{ genreName: string; id: string }>();

  useEffect(() => {
    const fetchFilteredGenreList = async (id: string) => {
      const data = await fetchMoviesWithGenreType(id);
      setFilteredGenreList(data);
    };

    fetchFilteredGenreList(id ?? "");
  }, [genreName, id]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  console.log(filteredGenreList);

  return (
    <div>
      {filteredGenreList.map(({ title, id }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Genrelanding;