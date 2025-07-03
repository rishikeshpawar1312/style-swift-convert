
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/organization", label: "Partner Organizations" },
    { path: "/disaster-zones", label: "Disaster Zones" },
    { path: "/emergency-contacts", label: "Emergency Contacts" },
    { path: "/volunteer-login", label: "Volunteer Login" },
    { path: "/agency-login", label: "Agency Login" },
  ];

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Shield className="h-6 w-6" />
            <span>National Disaster Management Platform</span>
          </Link>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-3`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-700 text-white"
                      : "text-gray-200 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
