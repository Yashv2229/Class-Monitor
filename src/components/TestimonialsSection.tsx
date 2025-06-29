import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Removed stars and reviews */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Photo collage inspired by ClassDojo */}
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-classdojo-blue/20 to-classdojo-green/20 rounded-3xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-classdojo-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">👨‍🏫</span>
                </div>
                <p className="text-sm text-gray-600 italic">"Class Monitor has transformed how I connect with my students and their families."</p>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-gradient-to-br from-classdojo-purple/20 to-classdojo-orange/20 rounded-3xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-classdojo-purple rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">👩‍👧</span>
                </div>
                <p className="text-xs text-gray-600 italic">"I love seeing what my daughter is learning each day!"</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-classdojo-green/20 to-classdojo-yellow/20 rounded-3xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-classdojo-green rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">🎓</span>
                </div>
                <p className="text-xs text-gray-600 italic">"The best classroom management tool I've ever used."</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-classdojo-orange/20 to-classdojo-red/20 rounded-3xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-classdojo-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🏫</span>
                </div>
                <p className="text-sm text-gray-600 italic">"Our school community has never been more engaged."</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-classdojo-green to-classdojo-blue rounded-3xl p-12 text-white text-center h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">
                Keeping teachers, families, and kids connected
              </h3>
              <p className="text-xl opacity-90 mb-8">
                Building stronger classroom communities through meaningful connections and shared experiences.
              </p>
              {/* Removed numbers (students & parents, countries, teacher satisfaction) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
