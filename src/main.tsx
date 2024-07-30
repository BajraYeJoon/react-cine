import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/theme-provider.tsx'
import { Toaster } from "@/components/ui/toaster";
import { MovieProvider } from "./context/movie-context.tsx";
import { WatchListProvider } from "./context/watchlist-context.tsx";
import { AuthProvider } from "./context/auth-context.tsx";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

posthog.init("phc_fQcn9SW8lEM635UzO6NIJQwS4OPo2tsakZJriWF44Nx", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only",
  capture_pageview: false,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <ThemeProvider defaultTheme="dark" storageKey="react-cine-theme">
        <AuthProvider>
          <MovieProvider>
            <MovieProvider>
              <WatchListProvider>
                <App />

                <Toaster />
              </WatchListProvider>
            </MovieProvider>
          </MovieProvider>
        </AuthProvider>
      </ThemeProvider>
    </PostHogProvider>
  </React.StrictMode>,
);
