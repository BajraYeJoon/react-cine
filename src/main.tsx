import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/theme-provider.tsx'
import { Toaster } from "@/components/ui/toaster";
import { MovieProvider } from "./context/movie-context.tsx";
import { WatchListProvider } from "./context/watchlist-context.tsx";
import { AuthProvider } from "./context/auth-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
);
