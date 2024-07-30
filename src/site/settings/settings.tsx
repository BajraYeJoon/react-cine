import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "@/components/Settings/profile";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/auth-context";

export default function Settings() {
  const { logout } = useAuthContext();
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
