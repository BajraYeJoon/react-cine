import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [logged, setLogged] = useState(
    Cookies.get("login-token") ? true : false
  );
  return (
    <AuthContext.Provider
      value={{
        logged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("If you are heere, it means i did something wrong!!!!");
  }
  return context;
};