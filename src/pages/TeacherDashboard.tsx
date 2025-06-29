import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function TeacherDashboard() {
  const { user } = useUser();

  if (!user) return null;
  if (user.unsafeMetadata.role !== "teacher") return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <SignedIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome, Teacher!
            </h1>
            <p className="text-gray-600 mb-6">
              This is your teacher dashboard. Only users with the teacher role can see this.
            </p>
            {/* Teacher-specific content here */}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
} 