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
import Navbar from "./AppComponents/Navbar";
// <<<<<<< discussion-forum-vaishali
// import CommunityChat from "./AppPages/CommunityChat";
// import Blogs from "./AppPages/Blogs";

import ComingSoon from "./AppPages/ComingSoon";


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
  // {
  //   path: '/discussion-forum-page',
  //   element: <DiscussionForum/>
  // },
  {
    path:'/user-dashboard',
    element:<UserDashboard/>
  },
  {
    path:'/messages',
    element:<PrivateMessaging/>
  },
//   {
// <<<<<<< discussion-forum-vaishali
//     path:'/community-chat',
//     element:<CommunityChat/>
//   },
//   {
//     path:'/blog',
//     element:<Blogs/>

    path: '*',
    element: <ComingSoon /> 

  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);