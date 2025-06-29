
import { Button } from "@/components/ui/button";
import { Heart, Home, BookOpen, Building, MapPin } from "lucide-react";

const HeroSection = () => {
  const roles = [
    { name: "Teacher", icon: Heart, color: "bg-yellow-100 text-yellow-600", bgColor: "hover:bg-yellow-50" },
    { name: "Parent", icon: Home, color: "bg-blue-100 text-blue-600", bgColor: "hover:bg-blue-50" },
    { name: "Student", icon: BookOpen, color: "bg-green-100 text-green-600", bgColor: "hover:bg-green-50" },
    { name: "School Leader", icon: Building, color: "bg-purple-100 text-purple-600", bgColor: "hover:bg-purple-50" },
    { name: "District Leader", icon: MapPin, color: "bg-red-100 text-red-600", bgColor: "hover:bg-red-50" },
  ];

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
            <p className="text-xl text-gray-600 mb-4">
              Loved by more than 45 million students and parents.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              Free for teachers, forever.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-12">Get started as a...</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {roles.map((role, index) => (
              <div
                key={role.name}
                className={`group cursor-pointer p-6 rounded-2xl border-2 border-gray-100 ${role.bgColor} transition-all duration-300 hover:border-gray-200 hover:shadow-lg animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-full ${role.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{role.name}</h3>
              </div>
            ))}
          </div>
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
