import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/register",
      element: <RegisterPage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
   }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
