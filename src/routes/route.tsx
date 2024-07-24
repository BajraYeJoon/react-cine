import { createBrowserRouter } from "react-router-dom";
import { Homepage, Layout, AuthLayout, SignUppage, SignInpage } from "@/site";
import { Landing } from "@/components/homeComponents";
import { ComingSoon } from "@/components/coming-soon";

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
          {
            path: "coming-soon",
            element: <ComingSoon />,
          },
          {
            path: "recently-viewed",
            element: <div>Recently viewed</div>,
          },
          {
            path: "settings",
            element: <div>Settings</div>,
          },
        ],
      },
      {
        path: "animations",
        element: <div>ANimationatin</div>,
      },
      {
        path: "genres",
        element: <div>genres</div>,
      },
      {
        path: "movies",
        element: <div>movies</div>,
      },
      {
        path: "series",
        element: <div>series</div>,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "join",
            element: <SignUppage />,
          },
          {
            path: "sign-in",
            element: <SignInpage />,
          },
        ],
      },
    ],
  },
]);