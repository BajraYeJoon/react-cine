import { createBrowserRouter } from "react-router-dom";
import {
  Homepage,
  Layout,
  AuthLayout,
  SignUppage,
  SignInpage,
  Settings,
  Movies,
} from "@/site";
import { Landing } from "@/components/homeComponents";
import { ComingSoon } from "@/components/coming-soon";
import { Subscribe } from "@/components/Subscribe";
import Billing from "@/components/billing/billing";

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
        element: <div>ANimationatin</div>,
      },
      {
        path: "genres",
        element: <div>genres</div>,
      },
      {
        path: "movies",
        element: <Movies />,
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
      {
        path: "subscribe",
        element: <Subscribe />,
        children: [
          {
            path: "billing",
            element: <Billing />,
          },
        ],
      },
    ],
  },
]);