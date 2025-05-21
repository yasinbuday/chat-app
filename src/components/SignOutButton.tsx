"use client";

import { ButtonHTMLAttributes, FC, useState } from "react";
import { Button } from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { Loader2, LogOut } from "lucide-react";

const SignOutButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch {
          toast.error("There was a problem signing out");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="h-4 w-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
