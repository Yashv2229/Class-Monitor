import { Camera, MessageCircle, Award, Share2 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="w-16 h-16 bg-classdojo-orange rounded-2xl flex items-center justify-center mb-8">
              <Camera className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Offer a window into their world
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With Stories, teachers can securely share photos, videos and updates on a private 
              feed so parents can see the classroom magic for themselves ✨
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-classdojo-green rounded-full"></div>
                <span className="text-gray-700">Secure, private sharing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-classdojo-blue rounded-full"></div>
                <span className="text-gray-700">Real-time classroom updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-classdojo-purple rounded-full"></div>
                <span className="text-gray-700">Parent engagement tools</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mock Interface */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-classdojo-blue to-classdojo-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ms. Jessica Zhou</h4>
                  <p className="text-sm text-gray-500">2nd Grade</p>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-classdojo-green/20 to-classdojo-blue/20 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Camera className="w-8 h-8 text-classdojo-green" />
                  </div>
                  <p className="text-sm text-gray-600">Today's lesson was electric ⚡</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4">Learning about the science of sound!</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <span>❤️</span>
                    <span>18</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>5</span>
                  </span>
                </div>
                <span>23</span>
              </div>
            </div>

            {/* Secondary card */}
            <div className="absolute -bottom-8 -right-4 bg-white rounded-2xl shadow-xl p-4 w-48 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-classdojo-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MG</span>
                </div>
                <div>
                  <h5 className="text-xs font-semibold">Mr. Griffin</h5>
                  <p className="text-xs text-gray-500">6th Grade</p>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-classdojo-purple/20 to-classdojo-orange/20 rounded-lg mb-2 flex items-center justify-center">
                <Award className="w-6 h-6 text-classdojo-purple" />
              </div>
              <p className="text-xs text-gray-600">Great teamwork today! 🎉</p>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                <span>+47 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
