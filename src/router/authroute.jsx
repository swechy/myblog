import React from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
const AuthRoute = ({ children, auth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
    console.log(location.pathname)
    navigate(location.pathname);
  }, [location.pathname]);

  return children;
};
export default AuthRoute;
