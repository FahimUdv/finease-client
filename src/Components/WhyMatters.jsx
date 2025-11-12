import React from "react";
import { FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo.png";
import firstImg from "../assets/img1.jpg";
import secondImg from "../assets/img2.jpg";
import thirdImg from "../assets/img3.jpg";
import fourthImg from "../assets/img4.jpg";
import fifthImg from "../assets/img5.jpg";

const WhyMatters = () => {
  return (
    <div className="bg-white pb-5">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Top Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
          Why{" "}
          <span className="bg-gradient-to-r from-[#0c0f5c] to-[#5f0958] bg-clip-text text-transparent">
            Financial Planning
          </span>{" "}
          Matters?
        </h2>
        <p className="mb-10">Understanding money management today builds confidence <br></br>and freedom for the future.</p>

        {/* Top Main Testimonial */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          {/* Left profile images */}
          <div className="flex -space-x-4">
            <div className="flex">
              <div className="w-20 h-75 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={firstImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-75 bg-gray-200 rounded-lg ms-4 overflow-hidden shadow-md">
                <img
                  src={secondImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Center text */}
          <div className="bg-[#eaf6ff] rounded-2xl p-8 shadow-md max-w-xl">
            <p className="text-3xl font-extrabold mb-3 text-gray-800">25%</p>
            <p className="font-semibold text-gray-400 mb-4">
              {" "}
              Financial planning helps you take control of your future by
              aligning your income, expenses, and goals. It ensures stability
              during uncertain times, builds confidence in your financial
              decisions, and paves the way for long-term growth and security.
            </p>
            <p className="font-semibold text-gray-800">Giuseppe Marrone</p>
            <p className="text-sm text-gray-500 mb-3">
              People Operations Lead at Worldsensing
            </p>
            <a
              href="#"
              className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read the Full Story <BsArrowRight />
            </a>
          </div>

          {/* Right profile images */}
          <div className="flex -space-x-4">
            <div className="flex">
              <div className="w-20 h-75 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={thirdImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-75 bg-gray-200 rounded-lg ms-4 overflow-hidden shadow-md">
                <img
                  src={fourthImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-75 bg-gray-200 rounded-lg ms-4 overflow-hidden shadow-md">
                <img
                  src={fifthImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* G2 Leader Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl p-8 shadow-sm gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="G2 Logo"
                className="w-20 h-10"
              />
              <h3 className="font-semibold text-gray-800 text-lg">
                Global Employment Platform Leader
              </h3>
            </div>
            <div className="flex gap-2">
              
                <div className="px-3 py-1 bg-white rounded shadow text-xs border text-gray-600">
                  Grid Leader
                </div>
                <div className="px-3 py-1 bg-white rounded shadow text-xs border text-gray-600">
                  Grid Leader
                </div>
                <div className="px-3 py-1 bg-white rounded shadow text-xs border text-gray-600">
                  Grid Leader
                </div>
                <div className="px-3 py-1 bg-white rounded shadow text-xs border text-gray-600">
                  Grid Leader
                </div>
              
            </div>
          </div>

          {/* Reviews */}
          <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
            {[
              {
                title: "Verified User in Computer Software",
                text: "We switched from Deel and haven't looked back since! As regular users, we've found the platform to be perfect for our EOR needs and the support from the Oyster team is always amazing.",
              },
              {
                title: "Verified User in Computer Software",
                text: "Having switched from a small, partner-dependant provider, Oyster just feels so easy — they understand local labour laws, take a proactive approach and solve issues fast.",
              },
              
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-md w-full md:w-80"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {review.title}
                </h4>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
          </div>

          <button className="btn btn-outline btn-sm mt-6 md:mt-10">
            See all G2 Reviews
          </button>
        
      </div>
    </div>
  );
};

export default WhyMatters;
