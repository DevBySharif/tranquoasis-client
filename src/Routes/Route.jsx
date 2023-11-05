import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import AddService from "../Pages/AddService";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PopularServices from "../Pages/PopularServices";
import Register from "../Pages/Register";
import Services from "../Pages/Services";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "popular-services",
        element: <PopularServices></PopularServices>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/addService",
    element: <AddService></AddService>,
  },
]);

export default Route;
