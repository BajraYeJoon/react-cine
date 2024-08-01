import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/context/auth-context";
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? children : <Navigate to="/sign-in" replace={true} />;
};

export default ProtectedRoute;
