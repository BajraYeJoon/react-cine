import { createBrowserRouter } from "react-router-dom";
import {
  Homepage,
  Layout,
  AuthLayout,
  SignUppage,
  SignInpage,
  Settings,
  Movies,
  Serieslanding,
  SubscribeLayout,
  Animationlanding,
  Genrelanding,
  GenreLayout,
  Watchlistlanding,
} from "@/site";
import { Landing } from "@/components/homeComponents";
import { ComingSoon } from "@/components/coming-soon";
import Billing from "@/components/billing/billing";
import { Subscribe } from "@/components/Subscribe";
import DetailPage from "@/components/details/DetailPage";

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
            element: <Settings />,
          },
          {
            path: "watchlist",
            element: <Watchlistlanding />,
          },
        ],
      },

      {
        path: "genre",
        element: <GenreLayout />,
        children: [
          {
            // path: ":genre/:id",
            index: true,
            path: ":genre/:id",
            element: <Genrelanding />,
          },
          // {
          //   path: "anime/:genre/:id",
          //   element: <Animationlanding />,
          // },
        ],
      },
      {
        path: "details/:id",
        element: <DetailPage />,
      },

      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "series",
        element: <Serieslanding />,
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
      {
        path: "subscribe",
        element: <SubscribeLayout />,
        children: [
          {
            index: true,
            element: <Subscribe />,
          },
          {
            path: "billing",
            element: <Billing />,
          },
        ],
      },
    ],
  },
]);
