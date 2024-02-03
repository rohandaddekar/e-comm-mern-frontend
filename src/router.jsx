import { createBrowserRouter } from "react-router-dom";

import HeaderFooterLayout from "./layouts/HeaderFooter";
import BlankLayout from "./layouts/Blank";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Error404 from "./pages/Error/Error404";
import AdminLayout from "./layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import User from "./pages/Admin/User/User";
import Category from "./pages/Admin/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/user",
        element: <User />,
      },
      {
        path: "/admin/category",
        element: <Category />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
