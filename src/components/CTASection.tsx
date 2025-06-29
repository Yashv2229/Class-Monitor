
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Image Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-classdojo-green/90 to-classdojo-blue/90"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
          Let's get growing
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join millions of teachers, students, and families who are building stronger classroom communities every day.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-classdojo-green hover:bg-gray-50 px-12 py-6 text-xl rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Get started
        </Button>
        
        <p className="text-white/80 mt-6 text-sm">
          Free for teachers, forever • No credit card required
        </p>
      </div>
    </div>
  );
};

export default CTASection;
