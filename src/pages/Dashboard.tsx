
import Layout from "@/components/Layout";
import { AlertTriangle, Ambulance, Home, BarChart3, FileText, Users, Calendar, DollarSign, Bot } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const handleSOSClick = () => {
    if (location) {
      // In a real app, this would send data to your backend
      const formData = new FormData();
      formData.append('access_key', 'c4936e92-1659-45bf-b364-7836cabe9a40');
      formData.append('latitude', location.lat.toString());
      formData.append('longitude', location.lng.toString());
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      }).then(() => {
        alert('Emergency alert sent! Responders have been notified of your location. Please stay on the line.');
      });
    } else {
      alert('Emergency alert sent! Please provide your location to responders.');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            National Disaster Management Dashboard
          </h1>
          <p className="text-gray-700">
            Comprehensive real-time platform providing critical insights, emergency alerts, and coordinated response mechanisms for effective disaster management across the nation, ensuring swift and strategic interventions.
          </p>
        </div>

        {/* SOS Section */}
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="text-6xl">🆘</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-red-600 mb-3">
                Emergency SOS Assistance
              </h2>
              <p className="text-lg mb-4">
                Press the SOS button for immediate emergency assistance during critical situations:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🔥</span>
                  Fire emergencies requiring immediate intervention
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🚗</span>
                  Vehicle accidents or being trapped in vehicles
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">💧</span>
                  Flash floods or being stranded in water-logged areas
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🏢</span>
                  Building collapses or being trapped under debris
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">💓</span>
                  Medical emergencies in disaster-affected areas
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border-2 border-blue-900 rounded-lg p-6 text-center">
            <div className="bg-blue-900 text-white p-3 rounded-t-lg -mx-6 -mt-6 mb-4">
              <h3 className="font-bold">Active Disaster Zones</h3>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">12</div>
            <p className="text-gray-600">
              Currently monitored disaster-affected regions requiring immediate strategic intervention and emergency support.
            </p>
          </div>

          <div className="bg-white border-2 border-blue-900 rounded-lg p-6 text-center">
            <div className="bg-blue-900 text-white p-3 rounded-t-lg -mx-6 -mt-6 mb-4">
              <h3 className="font-bold">Population Impacted</h3>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">4,75,300</div>
            <p className="text-gray-600">
              Individuals across multiple regions requiring comprehensive emergency assistance and rapid rehabilitation support.
            </p>
          </div>

          <div className="bg-white border-2 border-blue-900 rounded-lg p-6 text-center">
            <div className="bg-blue-900 text-white p-3 rounded-t-lg -mx-6 -mt-6 mb-4">
              <h3 className="font-bold">Relief Organizations</h3>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">56</div>
            <p className="text-gray-600">
              Government and NGO teams collaboratively providing integrated relief, rescue, and rehabilitation services nationwide.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: <AlertTriangle className="text-blue-900 w-12 h-12" />,
              title: "Disaster Alerts",
              description: "Receive comprehensive real-time disaster warnings, critical notifications, and official alerts from the National Disaster Management Authority."
            },
            {
              icon: <Ambulance className="text-blue-900 w-12 h-12" />,
              title: "Emergency Response Teams",
              description: "Monitor and track active specialized response teams deployed for immediate rescue operations, medical support, and comprehensive relief efforts."
            },
            {
              icon: <Home className="text-blue-900 w-12 h-12" />,
              title: "Evacuation Centers",
              description: "Access comprehensive information about government-approved emergency shelters, providing safe refuges for displaced citizens."
            },
            {
              icon: <BarChart3 className="text-blue-900 w-12 h-12" />,
              title: "Disaster Risk Assessment",
              description: "Advanced geospatial analysis of high-risk zones, vulnerability mapping, and predictive modeling to enhance strategic disaster preparedness."
            },
            {
              icon: <FileText className="text-blue-900 w-12 h-12" />,
              title: "Government Policies",
              description: "Comprehensive repository of updated government disaster management regulations, legal frameworks, and emergency response guidelines."
            },
            {
              icon: <Users className="text-blue-900 w-12 h-12" />,
              title: "Citizen Participation",
              description: "Empowering citizens through structured engagement programs, training modules, and collaborative platforms for effective disaster relief."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white border-2 border-blue-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <div className="text-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Chatbot Section */}
        <div className="bg-white border-2 border-blue-900 rounded-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="text-6xl text-blue-900">🤖</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">
                24/7 Disaster Management Assistant
              </h2>
              <p className="text-lg mb-4">
                Our AI-powered disaster management assistant is available 24/7 to provide critical information and guidance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Get real-time disaster updates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Find nearest evacuation centers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Receive emergency protocols
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Access emergency contact numbers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Request specific disaster guidance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Report disaster incidents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating SOS Button */}
      <button
        onClick={handleSOSClick}
        className="fixed bottom-8 left-8 w-24 h-24 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse border-4 border-white z-50"
      >
        SOS
      </button>
    </Layout>
  );
};

export default Dashboard;
