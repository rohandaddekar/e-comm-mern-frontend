import { createBrowserRouter } from "react-router-dom";

import HeaderFooterLayout from "./layouts/HeaderFooter";
import AdminLayout from "./layouts/Admin";
import BlankLayout from "./layouts/Blank";

import Products from "./pages/Products/Products";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Error404 from "./pages/Error/Error404";
import Home from "./pages/Home/Home";

import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Category from "./pages/Admin/Category/Category";
import Product from "./pages/Admin/Product/Product";
import User from "./pages/Admin/User/User";

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
      {
        path: "/admin/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
