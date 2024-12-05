import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import { AuthProvider } from "./context/AuthContext";
import "./components/Layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import AdsList from "./screens/AdsList/AdsList";
import Layout from "./components/Layout/Layout";
import AdPage from "./screens/AdPage/AdPage";
import Login from "./screens/Login/Login";
import Registration from "./screens/Registration/Registration";
import { useAuth } from "./context/AuthContext";
import CreateAd from "./screens/CreateAd/CreateAd";
const App = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          "http://localhost:5000/api/auth/auth",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error("Ошибка аутентификации:", error);
      }
    };

    fetchUserData();
  }, [setUser]);

  return <RouterProvider router={router} />;
};

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
        element: <Registration />,
      },
      {
        path: "/create",
        element: <CreateAd/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
