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
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom';

const router = createBrowserRouter([
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/courses',
    element: <CoursesHome />

  },
  {
    path: '/all-courses',
    element: <AllCourses />
  },
  {
    path: '/course-overview',
    element: <CoursesOverview />
  },
  {
    path: '/discussion-forum',
    element: <DiscussionLanding />
  },
  {
    path: '/discussion-forum-page',
    element: <DiscussionForum />
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />
  },
  {
    path: '/messages',
    element: <PrivateMessaging />
  }
]);

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-2mgbgxm3b0scb3xq.us.auth0.com"
    clientId="jbPL61beWzQOURvUieeunKmYzwpWY391"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);