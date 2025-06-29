import { SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpWithRole() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && localStorage.getItem("selectedRole")) {
      const role = localStorage.getItem("selectedRole");
      // Only set role if not already set
      if (user.unsafeMetadata.role !== role) {
        user.update({ unsafeMetadata: { ...user.unsafeMetadata, role } }).then(() => {
          if (role === "teacher") navigate("/dashboard/teacher");
          else if (role === "parent") navigate("/dashboard/parent");
        });
      } else {
        if (role === "teacher") navigate("/dashboard/teacher");
        else if (role === "parent") navigate("/dashboard/parent");
      }
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <SignUp routing="hash" />
    </div>
  );
} 