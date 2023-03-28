import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { BsBagPlusFill } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";
import { BsBoxArrowRight } from "react-icons/bs";
import AddItems from "./AddItems";
import ItemDetails from "./ItemDetails";
import IssueItems from "./Issueitems";

const WNavBar = ({}) => {
  const location1 = useLocation(); // conditionally render content based on the current route
  const currentRoute = location1.pathname;

  const [isOpen, setIsOpen] = useState(false); //for the toggle in nav bar
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/AddItems",
      name: "AddItems Home",
      icon: <BsBagPlusFill />,
    },
    {
      path: "/ItemDetails",
      name: "ItemDetails",
      icon: <RiFileList3Fill />,
    },
    {
      path: "/IssueItems",
      name: "IssueItems",
      icon: <BsBoxArrowRight />,
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
          <div
            style={{ paddingLeft: isOpen ? "250px" : "50px" }}
            className="main-content d-flex flex-column w-100 me-4 "
          >
            <div className="nametag w-100 p-3 m-2 shadow bg-light ">
              <h1>Food Bank - Warehouse Section</h1>
            </div>
            <div className="w-100 p-3 m-2">
              {/* conditional render */}
              {currentRoute === "/AddItems" && <AddItems />}
              {currentRoute === "/ItemDetails" && <ItemDetails />}
              {currentRoute === "/IssueItems" && <IssueItems />}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WNavBar;
