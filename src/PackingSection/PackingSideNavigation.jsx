import React,{useState} from 'react';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUserFriends,
    // FaPalfed,
    // FaCartPlus
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './PackingNavBar.css'

const PNavBar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:'/packingSection',
            name:"Packing Section Home",
            icon:<FaTh/>
        },
        {
            path:'/addPackages',
            name:"Add Packages",
            icon:<FaUserAlt/>
        },
        {
            path:'/issuePackages',
            name:"Issue Packages",
            icon:<FaUserFriends/>
        }
        // ,
        // {
        //     path:"/packing_details",
        //     name:"Packing_Details",
        //     icon:<FaPalfed/>
        // },
        // {
        //     path:"/delivery_details",
        //     name:"Delivery_Details",
        //     icon:<FaCartPlus/>
        // }
      
    ]

    return ( 
        <React.Fragment>
            <div className="container g-0">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{ marginLeft: isOpen ? "100px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>

        </React.Fragment>
     );
}
 
export default PNavBar;