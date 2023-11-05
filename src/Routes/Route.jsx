import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PopularServices from "../Pages/PopularServices";
import Register from "../Pages/Register";

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
        loader: () => fetch("http://localhost:5005/api/v1/popular-services"),
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
]);

export default Route;
