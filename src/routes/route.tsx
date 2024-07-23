import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/site";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
