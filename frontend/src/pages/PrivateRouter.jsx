import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { TeamContext } from "../contexts/TeamContext";

const PrivateRouter = () => {
  const { team } = React.useContext(TeamContext);
  if (!team._id) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRouter;
