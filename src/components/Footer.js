const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center space-x-2">
  {/* Logo */}
  <img 
    src="/logo.ico" 
    alt="Company Logo" 
    className="w-8 h-8"
  />
  {/* Company Name */}
  <span className="text-gray-700 font-medium">Startup Landing</span>
</div>

        {/* Copyright and Description */}
        <div className="text-gray-500 text-sm mt-4 md:mt-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} All rights reserved – Design & Developed by RedQ, Inc
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#advertise" className="text-gray-600 hover:text-gray-900">
            Advertise
          </a>
          <a href="#supports" className="text-gray-600 hover:text-gray-900">
            Supports
          </a>
          <a href="#marketing" className="text-gray-600 hover:text-gray-900">
            Marketing
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
