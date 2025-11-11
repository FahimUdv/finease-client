import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const links = [
        <NavLink className="mx-3">Home</NavLink>,
        <NavLink className="mx-3">Add Transaction</NavLink>,
        <NavLink className="mx-3">My Transaction</NavLink>,
        <NavLink className="mx-3">Reports</NavLink>
    ]
  return (
    <div className="lg:mx-15 rounded-full">
      <div className="navbar bg-base-100 px-10 py-0 my-5 border shadow-xl rounded-full min-h-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FinEase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="text-blue-800 text-sm font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
