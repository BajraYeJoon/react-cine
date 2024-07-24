import { createBrowserRouter } from "react-router-dom";
import { Homepage, Layout } from "@/site";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);
