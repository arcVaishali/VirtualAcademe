import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "signup",
    element: <SignUp/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: '/',
    element: <Home/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);