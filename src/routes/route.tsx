import { createBrowserRouter } from "react-router-dom";
import { Homepage, Layout } from "@/site";
import { Landing } from "@/components/homeComponents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            index: true,
            element: <Landing />,
          },
        ],
      },
      {
        path: "/animations",
        element: <div>ANimationatin</div>,
      },
      {
        path: "/genres",
        element: <div>genres</div>,
      },
      {
        path: "/movies",
        element: <div>movies</div>,
      },
      {
        path: "/series",
        element: <div>series</div>,
      },
    ],
  },
]);