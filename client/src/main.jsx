import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";

import "./components/Layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";

import AdsList from "./screens/AdsList/AdsList";
import Layout from "./components/Layout/Layout";
import AdPage from "./screens/AdPage/AdPage";
import Login from "./screens/Login/Login";
import Registration from "./screens/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        loader: () => redirect("/ads"),
      },
      {
        path: "/ads",
        element: <AdsList />,
      },
      {
        path: "/ads/:id",
        element: <AdPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
