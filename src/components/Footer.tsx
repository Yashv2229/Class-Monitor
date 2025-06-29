
import { GraduationCap } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About us", "Press", "Careers", "Engineering", "Accessibility"]
    },
    {
      title: "Resources", 
      links: ["Big Ideas", "Points", "Resources", "Training", "Remote Learning", "ClassDojo Plus", "Dojo Tutor"]
    },
    {
      title: "Support",
      links: ["Helpdesk", "Contact", "Transparency Notice at Collection", "Privacy and Security"]
    },
    {
      title: "Community",
      links: ["Teacher Community", "Facebook", "Twitter", "Instagram", "Wall of Love"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and Language Selector */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-classdojo-green to-classdojo-blue rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ClassDojo</span>
            </div>
            
            <div className="mb-6">
              <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-classdojo-green focus:outline-none">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>中文</option>
              </select>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-classdojo-green transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="text-white">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </div>
          
          <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="text-white">
              <div className="text-xs">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-blue-700 transition-colors cursor-pointer">
            <div className="text-white">
              <div className="text-xs">Available on</div>
              <div className="text-lg font-semibold">Clever</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-wrap items-center justify-between text-sm text-gray-400">
          <div className="flex flex-wrap items-center space-x-6">
            <span>© ClassDojo, Inc</span>
            <a href="#" className="hover:text-classdojo-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-classdojo-green transition-colors">Product Privacy Policy</a>
            <a href="#" className="hover:text-classdojo-green transition-colors">Website Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
