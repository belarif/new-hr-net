import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import CreateEmployee from "./Pages/CreateEmployee";
import EmployeeList from "./Pages/EmployeeList";
import Error from "./Pages/Error";
import reportWebVitals from "./reportWebVitals";
import "./css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <CreateEmployee />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
