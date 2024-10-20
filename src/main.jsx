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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
