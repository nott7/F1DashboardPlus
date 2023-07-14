import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TeamContext } from "../contexts/TeamContext";

const PrivateRouter = () => {
  const { team } = useContext(TeamContext);
  if (!team._id) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRouter;
