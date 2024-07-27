import "./index.css";
import { useEffect, useState } from "react";
import { fetchMoviesWithAnimeType } from "@/api/fetchapi";
import { useParams } from "react-router";
const Animationlanding = () => {
  const [animeList, setAnimeList] = useState([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchAnimeList = async (id: string) => {
      try {
        const response = await fetchMoviesWithAnimeType(id);
        setAnimeList(response);
      } catch (error) {
        console.error("Failed to fetch anime list:", error);
      }
    };

    fetchAnimeList(id ?? "16");
  }, [id]);

  console.log(animeList);

  return (
    <section className="flex flex-col justify-center items-center mt-12">
      {animeList.map((anime) => (
        <div key={anime.id}>{anime.title}</div>
      ))}
      <div className="card">
        <div className="top-section">
          <div className="border"></div>
        </div>
        <div className="bottom-section">
          <span className="title">UNIVERSE OF UI</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">100%</span>
              <span className="regular-text">Free for use</span>
            </div>
            <div className="item">
              <span className="big-text">38,631</span>
              <span className="regular-text">Contributers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animationlanding;
