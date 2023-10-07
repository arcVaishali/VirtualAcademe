import * as React from "react";
import "./index.css"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./AppPages/Home";
import CoursesCategory from "./AppPages/CoursesCategory";
import CoursesHome from "./AppPages/CoursesHome";
import AllCourses from "./AppPages/AllCourses";
import UserDashboard from "./AppPages/UserDashboard";
import CoursesOverview from "./AppPages/CoursesOverview";

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
    path:'/courses',
    element:<CoursesHome/>

  },
  {
    path:'/all-courses',
    element:<AllCourses/>

  },
  {
    path:'/course-overview',
    element:<CoursesOverview/>

  },
  {
    path:'/user-dashboard',
    element:<UserDashboard/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);