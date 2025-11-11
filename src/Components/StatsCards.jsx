import React from "react";
import {
  FaChartLine,
  FaPiggyBank,
  FaWallet,
  FaCoins,
  FaMoneyBillWave,
} from "react-icons/fa";

const cards = [
  { icon: <FaChartLine size={36} />, value: "85%", label: "Budget Accuracy" },
  { icon: <FaPiggyBank size={36} />, value: "$12,450", label: "Total Savings" },
  { icon: <FaWallet size={36} />, value: "24", label: "Active Accounts" },
  { icon: <FaCoins size={36} />, value: "৳75,000", label: "Monthly Income" },
  { icon: <FaMoneyBillWave size={36} />, value: "12%", label: "Expense Growth" },
];

const StatsCards = () => {
  return (
    <section className="bg-white my-5 rounded-3xl flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative w-40 h-40 cursor-pointer [perspective:1000px]"
          >
            {/* Inner wrapper */}
            <div
              className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#111113] text-white rounded-xl shadow-lg border border-gray-200 [backface-visibility:hidden]">
                {card.icon}
                <p className="mt-3 text-sm font-medium">{card.label}</p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-xl shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-2xl font-bold text-gray-800">
                  {card.value}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCards;
