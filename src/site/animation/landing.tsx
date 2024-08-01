import "./index.css";
import { useEffect, useState } from "react";
import { fetchMoviesWithAnimeType } from "@/api/fetchapi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MovieDetails } from "@/components/coming-soon/details/DetailPage";

type Anime = Pick<MovieDetails, 'id' | 'poster_path' | 'title' | 'release_date' | 'vote_average' | 'original_title'>;

const Animationlanding = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);  
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

  return (
    <section className="mt-12 grid grid-cols-2 items-center justify-center gap-12 px-2 md:grid-cols-3 md:px-8 lg:grid-cols-5 lg:p-0">
      {animeList.map(
        ({
          id,
          poster_path,
          title,
          release_date,
          vote_average,
          original_title,
        }) => (
          <div
            className="card group cursor-pointer bg-primary/20 [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box]"
            key={id}
          >
            <Link to={`/details/${id}`}>
              <div
                className="top-section overflow-hidden bg-cover bg-center bg-no-repeat object-contain"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                }}
              >
                <div className="border bg-background/90"></div>
              </div>
              <div className="bottom-section mt-4 space-y-4 rounded-b-[20px] bg-primary/15 p-4 text-center">
                <span className="title block text-center text-2xl font-medium text-foreground group-hover:underline">
                  {title.length > 5 ? title.slice(0, 20) + "..." : title}
                </span>
                <span className="text-sm text-foreground/70">
                  {Array.from(original_title).length > 10
                    ? Array.from(original_title).slice(0, 20) + "..."
                    : original_title}
                </span>
                <div className="row row1">
                  <div className="item">
                    <span className="big-text">{vote_average}</span>
                    <span className="regular-text">{release_date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ),
      )}
    </section>
  );
};

export default Animationlanding;
