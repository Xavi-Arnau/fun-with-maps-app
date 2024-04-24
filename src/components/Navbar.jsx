import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const links1 = [
    {
      name: "Automarkers",
      to: "/automarkers",
      icon: <FaMapMarkerAlt color="red" size={20} />,
    },
    {
      name: "Animated markers",
      to: "/animatedmarkers",
      icon: <FaMapMarkerAlt color="red" size={20} />,
    },
    { name: "Map1" },
  ];
  const links2 = [
    { name: "Experiment with map styles" },
    /*{ name: "Map1 dsgdfgfdg dfg" },
    { name: "Map1" },*/
  ];
  return (
    <div className="w-full bg-black text-white flex flex-row gap-4 justify-between p-4 px-10 min-h-[8vh]">
      <div>
        <p className="text-2xl font-bold tracking-wider">Fun with Maps</p>
      </div>
      <ul className="flex flex-row gap-8">
        <li>
          <NavLink to="/" className="selected">
            Home
          </NavLink>
        </li>
        <li>
          <Dropdown caption={"Exploring markers"} links={links1} />
        </li>
        <li>
          <Dropdown caption={"Styles"} links={links2} />
        </li>
        <li>
          <NavLink to="/about" className="selected">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
