/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const userAccessToken = useSelector((state) => state.user.userAccessToken);

  if (userAccessToken) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default AuthLayout;
