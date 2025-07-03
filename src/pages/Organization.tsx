
import Layout from "@/components/Layout";

const Organization = () => {
  const organizations = [
    {
      icon: "🚑",
      name: "National Disaster Response Force (NDRF)",
      description: "India's frontline force for disaster response, specializing in rescue and relief operations.",
      operations: [
        "Earthquake rescue missions in Nepal",
        "Flood relief operations in Assam",
        "Cyclone response in West Bengal"
      ]
    },
    {
      icon: "🌪",
      name: "Indian Meteorological Department (IMD)",
      description: "Responsible for weather forecasting and early warning systems for natural disasters.",
      operations: [
        "Early warning alerts for cyclones",
        "Weather predictions for flood-prone areas",
        "Real-time earthquake monitoring"
      ]
    },
    {
      icon: "📚",
      name: "National Institute of Disaster Management (NIDM)",
      description: "A premier institute that focuses on disaster preparedness, training, and policy research.",
      operations: [
        "Training for disaster first responders",
        "National-level policy research",
        "Community awareness programs"
      ]
    },
    {
      icon: "❤",
      name: "Indian Red Cross Society (IRCS)",
      description: "A humanitarian organization providing emergency relief, medical aid, and shelter.",
      operations: [
        "COVID-19 medical assistance",
        "Flood relief camps in Kerala",
        "Earthquake relief in Gujarat"
      ]
    },
    {
      icon: "🏛",
      name: "State Disaster Response Fund (SDRF)",
      description: "Coordinates state-level disaster relief, evacuation, and mitigation programs.",
      operations: [
        "Relief efforts during Maharashtra floods",
        "Wildfire management in Uttarakhand",
        "Drought assistance in Rajasthan"
      ]
    },
    {
      icon: "🌍",
      name: "United Nations Disaster Relief (UNDRR)",
      description: "An international agency supporting India's disaster risk reduction and resilience-building.",
      operations: [
        "Climate change adaptation strategies",
        "Funding for disaster-prone communities",
        "Technical expertise in disaster mitigation"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Partner Organizations</h1>
          <p className="text-gray-700">
            Key organizations working for disaster response, preparedness, and mitigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white border-2 border-blue-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{org.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{org.name}</h3>
                <p className="text-gray-600 mb-4">{org.description}</p>
              </div>
              <div>
                <h5 className="font-semibold text-blue-900 mb-2">Key Operations:</h5>
                <ul className="space-y-1">
                  {org.operations.map((operation, opIndex) => (
                    <li key={opIndex} className="text-sm text-gray-600">
                      • {operation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Organization;
