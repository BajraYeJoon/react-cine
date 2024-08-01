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
  Recentlanding,
} from "@/site";
import { Landing } from "@/components/homeComponents";
import { ComingSoon } from "@/components/coming-soon";
import Billing from "@/components/billing/billing";
import { Subscribe } from "@/components/Subscribe";
import DetailPage from "@/components/coming-soon/details/DetailPage";
import Onboarding from "@/components/onboarding";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => import("@/lib/posthogpageviewtracker"),
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
            element: <Recentlanding />,
          },
          {
            path: "settings",

            element: (
              <ProtectedRoute>
                <Settings />,
              </ProtectedRoute>
            ),
          },
          {
            path: "watchlist",

            element: <Watchlistlanding />,
          },
        ],
      },
      {
        path: "onboarding",
        element: <Onboarding />,
      },

      {
        path: "genre",
        element: <GenreLayout />,
        children: [
          {
            // path: ":genre/:id",
            index: true,
            path: ":category/:id",
            element: <Genrelanding />,
          },

          {
            path: "anime/:genre/:id",
            element: <Animationlanding />,
          },
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
