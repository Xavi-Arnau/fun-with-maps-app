import React, { useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Dropdown = ({ caption, links }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row items-center gap-1">
        <a className="hover:text-almostBlack">{caption}</a>
        {isVisible ? <AiOutlineUp size={14} /> : <AiOutlineDown size={14} />}
      </div>

      {isVisible ? (
        <div className="w-max absolute bg-white shadow-xl p-4 rounded-xl right-0 text-sm">
          <ul className="flex flex-col gap-4 p-4">
            {links.map((item) => (
              <li
                key={item.name}
                className="flex flex-row gap-4 items-center hover:scale-110 text-black"
              >
                {item.icon ? item.icon : null}
                <NavLink to={item.to} className="selected">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
