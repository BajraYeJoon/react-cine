import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
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
  Genres,
} from "@/site";
import { Landing } from "@/components/homeComponents";
import { ComingSoon } from "@/components/coming-soon";
import Billing from "@/components/billing/billing";
import { Subscribe } from "@/components/Subscribe";

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
        ],
      },
      {
        path: "animations",
        element: <Animationlanding />,
      },
      {
        path: "/genre/:genre",
        element: <Genres />,
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
