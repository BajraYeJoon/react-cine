/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {  useNavigate } from "react-router";

export type LoginProps = {
  username: string;
  password: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  login: ({ username, password }: LoginProps) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const navigate = useNavigate();
  const { toast } = useToast();

  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("token") ? true : false,
  );
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ username, password }: LoginProps) => {
    setIsLoading(true);
    console.log("Logging in", username, password);
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      const data = response.data;
      Cookies.set("token", data.token, { expires: 7 });
      setIsLoggedIn(true);
      console.log("Login successful", data);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
    });
    Cookies.remove("token");
    // navigate("/")
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error in the AuthContextProvider");
  }
  return context;
};
