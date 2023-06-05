import React from "react";
import { useLocation } from "react-router-dom";
import ANavBar from "./AdminSideNavigation";

const ARoutes = () => {
  const location = useLocation();
  const includePaths = [
    "/AdminHome",
    "/DataSupplierDetails",
    "/VictimDetails",
    "/AcceptedVictimsDetails",
    "/RejectedVictimsDetails",
    "/DataSupplierProfile",
    "/DeliverypersonDetails",
    '/userCreation'
  ]; // include only these paths to render navbar
  return (
    <React.Fragment>
      {includePaths.includes(location.pathname) && <ANavBar />}
    </React.Fragment>
  );
};

export default ARoutes;
