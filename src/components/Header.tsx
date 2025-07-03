
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-gray-100 py-2 text-center relative">
      <img 
        src="/images/ndma.jpg" 
        alt="NDMA Logo" 
        className="absolute h-24 w-24 left-5 top-1/2 transform -translate-y-1/2"
      />
      <img 
        src="/images/image1.jpg" 
        alt="Emblem of India" 
        className="h-12 mx-2 inline-block"
      />
      <span className="text-xl font-semibold text-gray-800">
        भारत सरकार | Government of India
      </span>
      <img 
        src="/images/azadi.jpg" 
        alt="Home Ministry Logo" 
        className="absolute h-12 right-5 top-1/2 transform -translate-y-1/2"
      />
    </div>
  );
};

export default Header;
