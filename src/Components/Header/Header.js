import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/appoinment">Appoinment</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b-2 border-zinc-200 flex justify-between">
        <div className="navbar-start ">
          <Link to="/" className="btn btn-ghost upper-case text-xl font-black">
            Doctor's Portal
          </Link>
        </div>
        {/* mobile menu  */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3  shadow bg-base-100  w-[250px]"
          >
            {navMenu}
          </ul>
        </div>
        {/* desktop menu  */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
