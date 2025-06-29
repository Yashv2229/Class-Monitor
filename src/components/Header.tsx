import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

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
            <span className="text-2xl font-bold text-gray-900">Class Monitor</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Teachers</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Our School</a>
            <a href="#" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">Resources</a>
            <SignedIn>
              <Link to="/dashboard" className="text-gray-700 hover:text-classdojo-green transition-colors font-medium">
                Dashboard
              </Link>
            </SignedIn>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <Button variant="ghost" className="text-gray-700 hover:text-classdojo-green">
                  Log in
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-classdojo-purple hover:bg-classdojo-purple/90 text-white px-6 py-2 rounded-full">
                  Sign up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
