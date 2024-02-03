/* eslint-disable react/prop-types */

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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
        className={`btn w-full justify-between bg-transparent text-white hover:text-black hover:bg-gray-100 border-0 rounded-md ${
          location.pathname === data?.to && "bg-gray-100 text-black"
        }`}
        onClick={() => linkHandler(data)}
      >
        {data?.title}

        {data?.nested === true &&
          (isClicked ? <IoIosArrowUp /> : <IoIosArrowDown />)}
      </div>
      {isClicked && data?.nested === true && (
        <ul className="menu p-2 w-full mt-1">
          {data?.nestedLinks?.map((nestedLink, i) => (
            <li key={i} className="hover:bg-gray-500 rounded-md">
              <NavLink to={nestedLink?.to}>{nestedLink?.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SideNav = () => {
  const links = [
    {
      title: "Dashboard",
      nested: false,
      to: "/admin",
    },
    {
      title: "User",
      nested: false,
      to: "/admin/user",
    },
    {
      title: "Category",
      nested: false,
      to: "/admin/category",
    },
    {
      title: "Settings",
      nested: true,
      nestedLinks: [
        {
          title: "Profile",
          to: "/admin/profile",
        },
      ],
    },
  ];

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
