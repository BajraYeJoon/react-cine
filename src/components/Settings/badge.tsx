import { useAuthContext } from "@/context/auth-context";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
const Badge = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isLoggedIn } = useAuthContext();

  if (isDesktop) {
    return (
      <>
        {isLoggedIn && (
          <Link to={`/settings`}>
            <div className="profile-badge h-6 w-6 cursor-pointer overflow-hidden rounded-full bg-primary"></div>
          </Link>
        )}
      </>
    );
  }

  return (
    <>
      <Link to={`/settings`}>
        {isLoggedIn ? (
          <div className="profile-badge h-6 w-6 cursor-pointer overflow-hidden rounded-full bg-primary"></div>
        ) : (
          <CircleUser />
        )}
      </Link>
    </>
  );
};

export default Badge;
