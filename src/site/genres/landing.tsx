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

  console.log(filteredGenreList);

  return (
    <div>
      {/* {filteredGenre && (
        <div>
          <h1>{filteredGenre.name}</h1>
          <div>
            {result.map((movie: any) => (
              <div key={movie.id}>{movie.name}</div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Genrelanding;