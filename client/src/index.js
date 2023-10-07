import * as React from "react";
import "./index.css"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./AppPages/SignUp";
import Login from "./AppPages/Login";
import Home from "./AppPages/Home";
import CoursesCategory from "./AppPages/CoursesCategory";
import CoursesHome from "./AppPages/CoursesHome";
import AllCourses from "./AppPages/AllCourses";
import DiscussionForum from "./AppPages/DiscussionForum";
import DiscussionLanding from "./AppPages/DiscussionLanding";
import "./index.css"
import UserDashboard from "./AppPages/UserDashboard";
import CoursesOverview from "./AppPages/CoursesOverview";
import PrivateMessaging from "./AppPages/PrivateMessaging";

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
    path: '/discussion-forum',
    element: <DiscussionLanding/>
  },
  {
    path: '/discussion-forum/:id',
    element: <DiscussionForum/>
  },
  {
    path:'/user-dashboard',
    element:<UserDashboard/>
  },
  {
    path:'/messages',
    element:<PrivateMessaging/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);