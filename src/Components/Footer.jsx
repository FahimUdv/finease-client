import React from "react";
import footerBgImg from "../assets/footbg.png";
import fineaseFooterImg from "../assets/finease-footer-up.png";
import JointCards from "./JointCards";
import StatsCards from "./StatsCards";
// import logo2 from "../assets/logo2.png";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <img
        src={fineaseFooterImg}
        alt="FinEase Footer"
        className="w-full h-[300px] sm:h-[300px] md:h-[600px] lg:h-[800px] object-cover"
      />
      <div className="lg:-mt-10 flex justify-center"><StatsCards></StatsCards></div>
      <footer
        className="bg-cover bg-top bg-no-repeat text-gray-300 pt-20 pb-5 px-6 md:px-26 w-screen object-cover"
        style={{ backgroundImage: `url(${footerBgImg})` }}
      >
        {/* Grid layout: 1 column on mobile, multi on md+ */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 text-center md:text-left md:mt-50">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            {/* <img className="w-40 h-auto rounded-lg mb-4" src={logo2} alt="Logo" /> */}
            <p className="text-sm leading-relaxed max-w-xs">
              Love the way we keep you warm! Discover our cozy collection today.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">Support</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h6 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h6>
            <div className="flex justify-center md:justify-start gap-5 text-xl mb-6">
              <a href="#" className="hover:text-white">
                {/* <FaFacebook /> */}
              </a>
              {/* <a href="#" className="hover:text-white">
              {/* <FaInstagram />
            </a> */}
              <a href="#" className="hover:text-white">
                {/* <FaLinkedinIn /> */}
              </a>
              <a href="#" className="hover:text-white">
                {/* <IoLogoWhatsapp /> */}
              </a>
              <a href="#" className="hover:text-white">
                {/* <IoMdMail /> */}
              </a>
            </div>

            <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="input input-bordered w-full bg-gray-800 text-sm text-gray-200 placeholder-gray-500"
              />
              <button className="btn bg-secondary text-white w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FinEase. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
