import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function ParentDashboard() {
  const { user } = useUser();

  if (!user) return null;
  if (user.unsafeMetadata.role !== "parent") return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <SignedIn>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to your Parent Dashboard
            </h1>
            <p className="text-gray-600 mb-6">
              Hello, {user?.firstName || user?.emailAddresses[0]?.emailAddress}! Here you can:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900">Your Child's Progress</h3>
                <p className="text-blue-700">Track academic and behavioral progress</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900">Messages</h3>
                <p className="text-green-700">Read messages from teachers</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900">Events</h3>
                <p className="text-purple-700">See upcoming school events</p>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
} 