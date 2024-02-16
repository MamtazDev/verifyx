import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import Chat from "../pages/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
]);