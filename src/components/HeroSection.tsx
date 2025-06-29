import { Button } from "@/components/ui/button";
import { Heart, Home, BookOpen, Building, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const role = user?.unsafeMetadata?.role;

  const roles = [
    { name: "Teacher", icon: Heart, color: "bg-yellow-400 text-yellow-900", bgColor: "hover:bg-yellow-300" },
    { name: "Parent", icon: Home, color: "bg-blue-500 text-white", bgColor: "hover:bg-blue-400" },
  ];

  const handleRoleClick = (role: string) => {
    localStorage.setItem("selectedRole", role.toLowerCase());
    navigate("/sign-up");
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Where classrooms
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-classdojo-green to-classdojo-blue">
              become communities
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-12">
          </div>
        </div>

        <div className="text-center mb-8">
          {!isSignedIn ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-12">Get started as a...</h2>
              <div className="flex justify-center gap-10 max-w-2xl mx-auto">
                {roles.map((role, index) => (
                  <div
                    key={role.name}
                    className={`group cursor-pointer p-10 rounded-3xl border-2 border-gray-100 ${role.bgColor} transition-all duration-300 hover:border-gray-200 hover:shadow-2xl animate-fade-in flex flex-col items-center w-56`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handleRoleClick(role.name)}
                  >
                    <div className={`w-24 h-24 rounded-full ${role.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="w-12 h-12" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-2xl">{role.name}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                You are logged in as <span className="font-bold text-classdojo-green">{typeof role === "string" ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}</span>
              </h2>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Button className="bg-classdojo-green hover:bg-classdojo-green/90 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
