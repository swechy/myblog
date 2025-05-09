import { createBrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import App from "../layouts/blog.jsx";
import Index from "../pages/index/index.jsx";
import Archives from "../pages/archives/index.jsx";
import Tags from "../pages/tags/index.jsx";
import Tools from "../pages/tools/index.jsx";
import Equipment from "../pages/equipment/index.jsx";
import About from "../pages/about/index.jsx";
import Post from "../pages/post/index.jsx";
import CopyRight from "../pages/copyright/copyright.jsx";
import Cookies from "../pages/copyright/cookies.jsx";
import Privacy from "../pages/copyright/privacy.jsx";
import Project from "../pages/project/index.jsx";
import Lucky from "../pages/lucky/index.jsx";
import GamePad from "../pages/gamepad/gamepad.jsx";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    console.log(location.pathname);
  }, [location.pathname]);
  return children;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <App />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/three/xiaomisu7",
        element: <Project />,
      },
      {
        path: "/archives",
        element: <Archives />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "/equipment",
        element: <Equipment />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/copyright",
        element: <CopyRight />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/lucky",
        element: <Lucky />,
      },
      {
        path: "/gamepad",
        element: <GamePad />,
      }
    ],
  },
]);
export default router;
