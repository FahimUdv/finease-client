import React, { useState } from "react";
import budgetingImg from "../assets/budgeting-tips.gif";
import growImg from "../assets/grow.jpg";

const Tips = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const tips = [
    {
      title: "Set Clear Financial Goals",
      detail:
        "Define what you’re saving for—emergencies, travel, or long-term investments—to stay motivated and consistent.",
    },
    {
      title: "Track Every Expense",
      detail:
        "Record your daily transactions to see where your money goes and identify areas for improvement.",
    },
    {
      title: "Follow the 50/30/20 Rule",
      detail:
        "Spend 50% on needs, 30% on wants, and save 20% for the future. A simple yet powerful framework for balanced budgeting.",
    },
    {
      title: "Review Your Budget Regularly",
      detail:
        "Monitor and adjust your budget monthly based on your actual income and spending trends.",
    },
  ];

  const toggleTip = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7faff] rounded-3xl shadow-lg mx-20 py-16 px-6 md:px-20 flex flex-col md:flex-row items-start gap-10">
      {/* Left side */}
      <div className="md:w-1/3 flex flex-col justify-center items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Read <span className="bg-gradient-to-r from-[#0c0f5c] to-[#5f0958] bg-clip-text text-transparent">
            Budgeting
          </span>{" "} Tips
        </h2>
        <p className="text-gray-600 my-5 leading-relaxed">
          Empower yourself to make smart financial decisions and achieve
          financial freedom step by step.
        </p>
        <img
          src={budgetingImg}
          alt="Budgeting Illustration"
          className="max-w-xs w-full mx-auto md:mx-0"
        />
      </div>

      {/* Right side */}
      <div className="md:w-2/3 space-y-6">
        {/* Top card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center">
            <div>
              <img className="w-50 rounded me-5" src={growImg} alt="" />
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Stay on Top of Your Finances
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A well-planned budget helps you maintain control over your
                spending, reach savings goals faster, and reduce financial
                stress. Take small consistent steps — your future self will
                thank you.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion section */}
        <div className="pt-2 space-y-3">
          {tips.map((tip, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <button
                onClick={() => toggleTip(index)}
                className="w-full text-left font-semibold text-gray-800 flex justify-between items-center hover:text-blue-600 transition-all"
              >
                <span>
                  {index + 1}. {tip.title}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="text-gray-600 text-sm mt-2 leading-relaxed animate-fadeIn">
                  {tip.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Button at bottom */}
        <div className="pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow transition-all">
            Explore More Budgeting Guides
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tips;
