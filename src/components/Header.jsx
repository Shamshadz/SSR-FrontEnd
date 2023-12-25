import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/romilogo.png";
import "../App.css";
import { useState } from "react";

function Header() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="  flex items-center justify-between   bg-slate-900 text-white px-3">
      <div className="flex items-center">
        <img src={logo} alt="" className=" w-[50px]" />
        <p className=" text-xl font-semibold">SSR Predictor</p>
      </div>
      <button className="btn2 lg:hidden" onClick={toggleDrawer}>
        Menu
      </button>
      <div
        className={`absolute left-0 top-0 w-64 h-[100vh] bg-slate-900 transition-transform transform ${showDrawer ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
      >
        <button
          className="btn2 absolute top-0 right-0 m-3"
          onClick={toggleDrawer}
        >
          Close
        </button>
        {/* You can add any content you want here */}
        <div className=" lg:hidden min-h-full flex flex-col gap-x-3 gap-y-3 mt-10 px-6 text-gray-400 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button className="btn">Login</button>
          <button className="btn2">Sign Up</button>
        </div>
      </div>
      <div className=" hidden lg:flex  gap-x-3 items-center text-gray-400 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </div>
  );
}

export default Header;
