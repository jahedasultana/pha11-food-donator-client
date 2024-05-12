import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddFood from "../page/AddFood/AddFood";
import AvailableFood from "../page/AvailableFood/AvailableFood";
import ManageMyFood from "../page/ManageMyFood/ManageMyFood";
import Details from "../page/Details/Details";
import Update from "../page/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/featured-foods"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/availableFood",
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFood></ManageMyFood>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
    ],
  },
]);

export default router;
