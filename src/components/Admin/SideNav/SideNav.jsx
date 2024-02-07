/* eslint-disable react/prop-types */

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import links from "../../../utils/AdminSideNavLinks";
import { useState } from "react";

const Link = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isClicked, setIsCliked] = useState(false);

  const linkHandler = (data) => {
    setIsCliked(!isClicked);

    !data?.nested && navigate(data?.to);
  };

  return (
    <div className="w-full mb-2">
      <div
        tabIndex={0}
        role="button"
        className={`btn w-full justify-between ${
          location.pathname === data.to
            ? "bg-gray-100 text-black"
            : "bg-transparent text-white"
        } hover:text-black hover:bg-gray-100 border-0 rounded-md `}
        onClick={() => linkHandler(data)}
      >
        <div className="flex items-center gap-3">
          {<data.icon className="text-lg" />}
          {data?.title}
        </div>

        {data?.nested === true &&
          (isClicked ? <IoIosArrowUp /> : <IoIosArrowDown />)}
      </div>
      {isClicked && data?.nested === true && (
        <ul className="p-2 w-full mt-1">
          {data?.nestedLinks?.map((nestedLink, i) => (
            <li key={i}>
              <NavLink
                to={nestedLink?.to}
                className={`flex items-center gap-3 px-2 py-1 mb-1 text-sm ${
                  location.pathname === nestedLink.to
                    ? "bg-gray-100 text-black active:bg-gray-100"
                    : "bg-transparent text-white"
                } hover:text-black hover:bg-gray-100 border-0 rounded-md `}
              >
                {<nestedLink.icon className="text-lg" />}
                {nestedLink?.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SideNav = () => {
  return (
    <>
      <div className="bg-gray-800 text-white w-1/5 p-4">
        <NavLink to={"/"} className="block text-2xl font-bold mb-4">
          LOGO
        </NavLink>

        {links?.map((link, i) => (
          <Link key={i} data={link} />
        ))}
      </div>
    </>
  );
};

export default SideNav;
