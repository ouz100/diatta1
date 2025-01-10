import { FaPencilAlt, FaVectorSquare, FaEdit, FaTrophy, FaCheckCircle } from "react-icons/fa";

const FeaturesAndBoostSection = () => {
  const features = [
    {
      title: "Unlimited Customization",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
      icon: <FaPencilAlt className="text-white text-2xl" />,
      bgColor: "bg-yellow-400",
    },
    {
      title: "Vector shape & resizable",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
      icon: <FaVectorSquare className="text-white text-2xl" />,
      bgColor: "bg-teal-400",
    },
    {
      title: "Editing freedom",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
      icon: <FaEdit className="text-white text-2xl" />,
      bgColor: "bg-blue-400",
    },
    {
      title: "Best Award history",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
      icon: <FaTrophy className="text-white text-2xl" />,
      bgColor: "bg-orange-400",
    },
  ];

  return (
    <div>
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-purple-600 font-medium mb-3">Quality features</p>
          <h2 className="text-3xl font-bold mb-10">Meet exciting features of the app</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${feature.bgColor}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boost Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
            <img
              src="/ki.png" 
              alt="Man on rocket"
              className="max-w-full"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 px-5 lg:pl-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Boost your agencies by choosing <br />
              <span className="text-gray-800">Ninja Developers</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Create custom landing pages with Shades that convert more visitors
              than any website, no coding required.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-Gray-50 text-lg mr-3" />
                <span className="text-gray-800">Unlimited design possibility</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-Gray-50 text-lg mr-3" />
                <span className="text-gray-800">Completely responsive features</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-Gray-50 text-lg mr-3" />
                <span className="text-gray-800">Easy to customize plugins</span>
              </li>
            </ul>

            {/* Learn More Link */}
            <div className="mt-8">
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline flex items-center"
              >
                Learn more
                <svg
                  xmlns="ki.png"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAndBoostSection;
