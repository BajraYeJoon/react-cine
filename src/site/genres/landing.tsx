import { fetchMoviesWithGenreType } from "@/api/fetchapi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "sk-proj-v7aTnBMlBMUviGSr1NFIT3BlbkFJFiO1I6xLkMRMUW3k7stL",
//   defaultHeaders: {
//     OPENAI_API_KEY: "sk-proj-v7aTnBMlBMUviGSr1NFIT3BlbkFJFiO1I6xLkMRMUW3k7stL",
//   },
//   dangerouslyAllowBrowser: true,
// });

// const OPENAI_API_KEY =
//   "sk-proj-v7aTnBMlBMUviGSr1NFIT3BlbkFJFiO1I6xLkMRMUW3k7stL";

const Genrelanding = () => {
  // const [prompt, setPrompt] = useState("A scene representing genre Comedy");
  // const [generatedImages, setGeneratedImages] = useState<{ url: string }[]>([]);

  const [filteredGenreList, setFilteredGenreList] = useState<any[]>([]);
  const { genreName, id } = useParams<{ genreName: string; id: string }>();
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
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error generating images:", error);
  //   } finally {
  //     console.log("generated images");
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
        })
      );

      setLoading(false);
      setFilteredGenreList(mappedDataWithAddedClassName.slice(0, 16));
    };

    fetchFilteredGenreList(id ?? "");
  }, [genreName, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(filteredGenreList);

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {/* <div className="grid grid-cols-8 grid-rows-6 gap-4  *:rounded-xl *:overflow-hidden *:bg-foreground/25">
      </div> */}

      <div className="h-[900px] grid gap-4">
        {filteredGenreList.map(({ title, id, backdrop_path, className }) => {
          return (
            <div
              key={id}
              className={`${className} relative rounded-xl overflow-hidden transition-transform duration-500 shadow-lg shadow-foreground/15 ease-in-out group bg-foreground/25`}
            >
              <div
                className=" 
              absolute bottom-0 left-0 opacity-0 group-hover:inset-0 group-hover:bg-gradient-to-t group-hover:from-background/90 group-hover:z-40 group-hover:to-transparent group-hover:opacity-100 transition-opacity duration-500 "
              >
                <h1 className="absolute bottom-0 p-4 text-base">asdfad</h1>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                className="object-top h-full w-full object-cover"
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