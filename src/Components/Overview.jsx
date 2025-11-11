import React from "react";
import { FaChartLine, FaUsers, FaBrain, FaArrowRight } from "react-icons/fa";

const Overview = () => {
  const features = [
    {
      title: "Power of Trading",
      description:
        "Trade with major, minor and exotic currency pairs – with real-time analytics and secure execution.",
      icon: <FaChartLine className="text-blue-600 text-4xl mb-4 transition-all duration-300 group-hover:text-white" />,
    },
    {
      title: "Choose Right Market",
      description:
        "Access forex, commodities, indices, and crypto markets — all from a well-designed platform.",
      icon: <FaUsers className="text-blue-600 text-4xl mb-4 transition-all duration-300 group-hover:text-white" />,
    },
    {
      title: "Trade Smarter Way",
      description:
        "Use automated tools, signals, and AI-backed strategies to optimize every move for aspiring traders.",
      icon: <FaBrain className="text-blue-600 text-4xl mb-4 transition-all duration-300 group-hover:text-white" />,
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Forex Made Simple, <br /> Profits Made Real
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group rounded-2xl shadow-sm p-8 bg-white transition-all duration-500 hover:bg-blue-600 hover:text-white cursor-pointer`}
          >
            <div className="flex flex-col items-center justify-center text-center">
              {feature.icon}
              <h3 className="text-lg font-bold mb-3 transition-all duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-100 opacity-90 mb-6 transition-all duration-300">
                {feature.description}
              </p>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:translate-x-2">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
