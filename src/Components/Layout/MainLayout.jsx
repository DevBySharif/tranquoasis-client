import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer";
import Navbar from "../../Pages/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
