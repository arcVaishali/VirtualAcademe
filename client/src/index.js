import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./AppPages/SignUp";
import Login from "./AppPages/Login";
import Home from "./AppPages/Home";
import CoursesCategory from "./AppPages/CoursesCategory";

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
  },
  {
    path: '/courses-category',
    element: <CoursesCategory/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);