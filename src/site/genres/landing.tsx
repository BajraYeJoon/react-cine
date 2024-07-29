import { fetchMoviesWithGenreType } from "@/api/fetchapi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Genrelanding = () => {
  // const [prompt, setPrompt] = useState("A scene representing genre Comedy");
  // const [generatedImages, setGeneratedImages] = useState<{ url: string }[]>([]);

  const [filteredGenreList, setFilteredGenreList] = useState([]);
  const { category, id } = useParams<{ category: string; id: string }>();
  const [loading, setLoading] = useState(false);

  // async function generateImages() {
  //   try {
  //     // const requestData = {
  //     //   prompt: prompt,
  //     //   n: 2,
  //     //   size: "256x256", // Set the desired image size here
  //     // };

  //     // const headers = {
  //     //   "Content-Type": "application/json",
  //     //   Authorization: `Bearer ${OPENAI_API_KEY}`,
  //     // };

  //     // const response = await axios.post(
  //     //   "https://api.openai.com/v1/images/generations",
  //     //   requestData,
  //     //   {
  //     //     headers: headers,
  //     //   }
  //     // );

  //     const response = await openai.images.generate({
  //       prompt: prompt,
  //       n: 2,
  //       size: "256x256",
  //     });
  //     setGeneratedImages(response.data);
  //
  //   } catch (error) {
  //     console.error("Error generating images:", error);
  //   } finally {
  //
  //   }
  // }

  const getClassName = (index: number) => {
    const classNames = [
      "col-span-2 row-span-2", // 1
      "col-start-0", // 2
      "col-start-0", // 3
      "col-span-2 row-span-2", // 4
      "row-span-2", // 5
      "row-span-2", // 6
      "col-span-2 row-span-3", // 7
      "col-span-2 row-span-2", // 8
      "col-span-3 row-span-2", // 9
      "col-start-4 row-start-5", // 10
      "col-start-4 row-start-6", // 11
      "col-span-2 row-span-3 col-start-5 row-start-3", // 12
      "col-start-5 row-start-6", // 13
      "col-start-6 row-start-6", // 14
      "col-span-2 col-start-7 row-start-3", // 15
      "col-span-2 row-span-3 col-start-7 row-start-4", // 16
    ];

    return classNames[index];
  };

  useEffect(() => {
    const fetchFilteredGenreList = async (id: string) => {
      setLoading(true);
      const data = await fetchMoviesWithGenreType(id);
      const mappedDataWithAddedClassName = data.map(
        (item: any, index: number) => ({
          ...item,
          className: getClassName(index),
        }),
      );

      setLoading(false);
      setFilteredGenreList(mappedDataWithAddedClassName.slice(0, 16));
    };

    fetchFilteredGenreList(id ?? "");
  }, [category, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {/* <div className="grid grid-cols-8 grid-rows-6 gap-4  *:rounded-xl *:overflow-hidden *:bg-foreground/25">
      </div> */}

      <div className="grid h-[900px] gap-4">
        {filteredGenreList.map(({ title, id, poster_path, className }) => {
          return (
            <div
              key={id}
              className={`${className} group relative overflow-hidden rounded-xl border border-transparent bg-foreground/25 transition-transform duration-500 ease-in-out [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box] before:absolute before:inset-0 before:bg-[url('./noise.png')] before:bg-[length:352px_382px]`}
            >
              <div className="absolute bottom-0 left-0 opacity-0 transition-opacity duration-500 group-hover:inset-0 group-hover:z-40 group-hover:bg-gradient-to-t group-hover:from-background/90 group-hover:to-transparent group-hover:opacity-100">
                <h1 className="absolute bottom-0 p-4 text-base">asdfad</h1>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                className="h-full w-full object-cover object-top"
              />
              <h1>{title}</h1>
            </div>
          );
        })}
      </div>

      {/* <div>
        <label htmlFor="prompt">Enter a Prompt: </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <button
        onClick={generateImages}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Images
      </button>
      {generatedImages.length > 0 && (
        <div className="mt-4">
          {generatedImages.map((image, index) => (
            <div key={index} className="mt-4">
              <img
                src={image.url}
                alt={`Generated Image ${index}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Genrelanding;