import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory, MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiBoxes } from "react-icons/ci";

const links = [
  {
    title: "Dashboard",
    nested: false,
    to: "/admin",
    icon: MdOutlineDashboard,
  },
  {
    title: "User",
    nested: false,
    to: "/admin/user",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Category",
    nested: false,
    to: "/admin/category",
    icon: MdOutlineCategory,
  },
  {
    title: "Product",
    nested: false,
    to: "/admin/product",
    icon: CiBoxes,
  },
  {
    title: "Settings",
    nested: true,
    icon: IoSettingsOutline,
    nestedLinks: [
      {
        title: "Profile",
        to: "/admin/profile",
        icon: MdOutlineDashboard,
      },
    ],
  },
];

export default links;
