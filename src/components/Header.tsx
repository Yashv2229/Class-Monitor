
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-classdojo-green to-classdojo-blue rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">ClassDojo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Teachers</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Schools</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Districts</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Resources</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Dojo Islands</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Dojo Tutor</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-classdojo-green">
              Log in
            </Button>
            <Button className="bg-classdojo-purple hover:bg-classdojo-purple/90 text-white px-6 py-2 rounded-full">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
