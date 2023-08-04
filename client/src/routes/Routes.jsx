import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import RoomDetails from "../Components/RoomDetails/RoomDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../Components/Dashboard/Sidebar";
import AddRoom from "../Pages/Dashboard/AddRoom";
import { getRoom } from "../api/rooms";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            {" "}
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/add-room",
        element: <AddRoom></AddRoom>,
      },
    ],
  },
]);
