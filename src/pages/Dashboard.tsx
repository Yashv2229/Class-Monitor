import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();

  if (!user) return null;

  // Redirect based on role
  const role = user.unsafeMetadata.role;
  if (role === "teacher") return <Navigate to="/dashboard/teacher" />;
  if (role === "parent") return <Navigate to="/dashboard/parent" />;

  // If no role, show a fallback or error
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-700">No role assigned to your account.</p>
    </div>
  );
};

export default Dashboard; 