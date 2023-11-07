import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import AddService from "../Pages/AddService";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ManageServices from "../Pages/ManageServices";
import MySchedules from "../Pages/MySchedules";
import PopularServices from "../Pages/PopularServices";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
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
      {
        path: "addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-services",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "my-schedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
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
