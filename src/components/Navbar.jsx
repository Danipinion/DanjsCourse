import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [open, setopen] = useState(true);
  const [Navbar, setNavbar] = useState(false);
  const openNav = () => {
    setopen(!open);
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <div
      className={
        Navbar
          ? "navbar bg-base-100 fixed font-roboto z-10"
          : "navbar bg-transparent fixed font-roboto z-10"
      }
    >
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
          <img src={logo} alt="logo" className="h-full" />
          Danjs Course
        </a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-ghost btn-circle sm:hidden"
          onClick={() => {
            openNav();
          }}
        >
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <ul
          className={
            open
              ? "sm:menu sm:menu-horizontal px-1 hidden"
              : "sm:menu sm:menu-horizontal sm:px-1 flex flex-col absolute sm:static top-14 right-4 text-right"
          }
        >
          <li>
            <NavLink
              to="/"
              className="hover:bg-transparent hover:text-blue-500 font-bold"
              onClick={() => {
                openNav();
              }}
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              to="courses"
              className="hover:bg-transparent hover:text-blue-500 font-bold"
              onClick={() => {
                openNav();
              }}
            >
              Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className="hover:bg-transparent hover:text-blue-500 font-bold"
              onClick={() => {
                openNav();
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
