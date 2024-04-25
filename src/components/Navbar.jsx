import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { FaMapMarkerAlt, FaPlane, FaMap } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
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
    {
      name: "Animated line Indiana Jones style",
      to: "/animatedline",
      icon: <FaPlane color="red" size={20} />,
    },
  ];
  const links2 = [
    {
      name: "Experiment with map styles",
      to: "/mapstyles",
      icon: <FaMap size={20} />,
    },
    /*{ name: "Map1 dsgdfgfdg dfg" },
    { name: "Map1" },*/
  ];
  return (
    <div className="w-full bg-black text-white flex flex-row gap-4 justify-between p-4 px-10 min-h-[8vh]">
      <div>
        <p className="text-2xl font-bold tracking-wider">
          <a href="/">Fun with Maps</a>
        </p>
      </div>
      <ul className="hidden md:flex flex-row gap-8">
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
      <div onClick={handleNav} className="block md:hidden z-30">
        {nav ? (
          <AiOutlineClose color="black" size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
      <div
        className={
          nav
            ? "md:hidden w-2/3 bg-white z-20 fixed h-full top-[0px] right-[0px] ease-in duration-500"
            : "md:hidden w-2/3 bg-white z-20 fixed h-full top-[0px] right-[-100%] ease-in duration-500"
        }
      >
        <div className="p-10 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-black">
            <li>Exploring markers</li>
            <ul className="flex flex-col gap-4">
              {links1.map((item) => (
                <NavLink to={item.to} className="flex flex-row">
                  {item.icon} {item.name}
                </NavLink>
              ))}
            </ul>
            <li>Styles</li>
            <ul className="flex flex-col gap-4">
              {links2.map((item) => (
                <NavLink to={item.to} className="flex flex-row">
                  {item.icon} {item.name}
                </NavLink>
              ))}
            </ul>
            <li>
              <NavLink to="/about" className="selected">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden w-full inset-0 bg-black bg-opacity-70 z-10 fixed h-full ease-in-out duration-500"
            : "md:hidden w-full inset-0 bg-black bg-opacity-0 z-10 fixed h-full ease-in-out duration-500"
        }
      ></div>
    </div>
  );
};

export default Navbar;
