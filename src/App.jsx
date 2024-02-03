import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.themeChange.theme);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
