import React, { useState } from "react";

import {
  FaTh,
  FaBars,
  FaAddressBook,
  FaAddressCard,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";
import "./AdminNavBar.css";
import AdminHome from "./AdminHome";
import DataSupplierDetails from "./DataSupplierDetails";
import VictimDetails from "./VictimDetails";
import AcceptedVictimsDetails from "./AcceptedVictimsDetails";
import RejectedVictimsDetails from "./RejectedVictimsDetails";
import DataSupplierProfile from "./DataSupplierProfile";
import DeliverypersonDetails from "./DeliverypersonDetails"

const ANavBar = ({ children }) => {
  const location1 = useLocation();
  const currentRoute = location1.pathname;

  const [isOpen, setIsOpen] = useState(false); //for the toggle in nav bar
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/AdminHome",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/DataSupplierDetails",
      name: "Data_Supplier_Details",
      icon: <FaAddressBook />,
    },

    {
      path: "/VictimDetails",
      name: "Victim Details",
      icon: <FaAddressCard />,
    },

    {
      path: "/AcceptedVictimsDetails",
      name: "Accepted Victims",
      icon: <FaUserCheck />,
    },

    {
      path: "/RejectedVictimsDetails",
      name: "Rejected Victims",
      icon: <FaUserTimes />,
    },

    {
      path: "/DeliverypersonDetails",
      name: "Delivery_Person_Details",
      icon: <FaUserTimes />,
    },
  ];

  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="container1 g-0 ">
          <div
            style={{ width: isOpen ? "250px" : "50px" }}
            className="sidebar position-fixed"
          >
            <div className="top_section">
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className="logo"
              >
                Logo
              </h1>
              <div
                style={{ marginLeft: isOpen ? "100px" : "0px" }}
                className="bars"
              >
                <FaBars onClick={toggle} />
              </div>
            </div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="d-flex w-100">
          {/* <div className={`main-content ${isOpen ? 'expanded' : 'collapsed'}`}> */}
          <div
            style={{ paddingLeft: isOpen ? "250px" : "50px" }}
            className="main-content d-flex flex-column w-100 me-4 "
          >
            <div className="nametag w-100 p-3 m-2 shadow bg-light ">
              <h1>Food Bank - Admin Section</h1>
            </div>

            <div className="w-100 p-3 m-2">
              {/* conditional render */}
              {currentRoute === "/AdminHome" && <AdminHome />}
              {currentRoute === "/DataSupplierDetails" && (
                <DataSupplierDetails />
              )}
              {currentRoute === "/VictimDetails" && <VictimDetails />}
              {currentRoute === "/AcceptedVictimsDetails" && (
                <AcceptedVictimsDetails />
              )}
              {currentRoute === "/RejectedVictimsDetails" && (
                <RejectedVictimsDetails />
              )}
              {currentRoute === "/DataSupplierProfile" && (
                <DataSupplierProfile />
              )}
               {currentRoute === "/DeliverypersonDetails" && (
                <DeliverypersonDetails />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ANavBar;
