import React from "react";
import { FaChartLine, FaUsers, FaBrain, FaArrowRight } from "react-icons/fa";

const Overview = () => {
  const features = [
    {
      title: "Total Balance",
      description:
        "12,560",
      icon: <FaChartLine className="text-[#060025] text-4xl mb-4 transition-all duration-300 group-hover:text-white" />,
    },
    {
      title: "Income",
      description:
        "5,70,500",
      icon: <FaUsers className="text-[#060025] text-4xl mb-4 transition-all duration-300 group-hover:text-white" />,
    },
    {
      title: "Expense",
      description:
        "78,995",
      icon: <FaBrain className="text-[#060025] text-4xl mb-4 transition-all duration-300 group-hover:text-white" />,
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        My <span className="bg-gradient-to-r from-[#0c0f5c] to-[#5f0958] bg-clip-text text-transparent">
            Bag
          </span>{" "}
      </h2>
      <p>Overview of total income, expenses and available balance.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group rounded-2xl shadow-sm p-8 bg-[#ededed] transition-all duration-500 hover:bg-[#111111] hover:text-white cursor-pointer`}
          >
            <div className="flex flex-col items-center justify-center text-center">
              {feature.icon}
              <p className="bg-gradient-to-r from-[#2a1a29] to-[#0b0c16] bg-clip-text text-transparent font-semibold mb-5 group-hover:text-gray-100 opacity-90 mb-6 transition-all duration-300">{feature.title}</p>
              <p className="text-3xl font-semibold group-hover:text-gray-100 opacity-90 mb-6 transition-all duration-300">
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
