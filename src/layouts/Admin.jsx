import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../components/Admin/SideNav/SideNav";

const AdminLayout = () => {
  const loggedUser = useSelector((state) => state.user);

  if (!loggedUser.userAccessToken || loggedUser.role === "customer") {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="flex h-screen">
        <SideNav />

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
