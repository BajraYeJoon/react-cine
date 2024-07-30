import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/context/auth-context";
import { toast } from "../ui/use-toast";

const ProtectedRoute = ({
  children,
  redirectUrl,
}: {
  redirectUrl: string;
  children: React.ReactNode;
}) => {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) {
    toast({
      title: "Not logged in",
      description: "Please login to continue",
      variant: "destructive",
    });
    return <Navigate to={redirectUrl} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
