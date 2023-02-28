import React,{useState} from 'react';

import {
    FaTh,
    FaBars,
    FaUserFriends,
    // FaPalfed,
    // FaCartPlus
}from "react-icons/fa";
import {AiOutlineAppstoreAdd}from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';
import './PackingNavBar.css';
import AddPackages from './AddPackages';
import PackageIsues from './PackageIsuues';
import PackingHome from './PackingHome';

const PNavBar = ({children}) => {

    const location1 = useLocation();
    const currentRoute = location1.pathname; 

    const[isOpen ,setIsOpen] = useState(false); //for the toggle in nav bar
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
            icon:<AiOutlineAppstoreAdd/>
        },
        {
            path:'/issuePackages',
            name:"Issue Packages",
            icon:<FaUserFriends/>
        }
    //      ,
    //      {
    //         path:"/packing_details",
    //         name:"Packing_Details",
    //         icon:<FaPalfed/>
    //  },
        // {
        //     path:"/delivery_details",
        //     name:"Delivery_Details",
        //     icon:<FaCartPlus/>
        // }
      
    ]

    return ( 
        <React.Fragment>
            <div className='d-flex'>
    
            <div className="container1 g-0 ">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar position-fixed">
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
        
        </div>
        <div className='d-flex w-100'>
        {/* <div className={`main-content ${isOpen ? 'expanded' : 'collapsed'}`}> */}
        <div style={{paddingLeft: isOpen ? "250px" : "50px"}} className='main-content d-flex flex-column w-100 me-4 '>
            <div className='nametag w-100 p-3 m-2 shadow bg-light '>
                <h1>Food Bank - Packing Section</h1>
            </div>
        
            <div className='w-100 p-3 m-2'>
            {/* conditional render */}
                {currentRoute === '/packingSection' && <PackingHome/>} 
                {currentRoute === '/addPackages' && <AddPackages/>} 
                {currentRoute === '/issuePackages' && <PackageIsues/>} 
             </div>
             </div>
             </div>
        
            
        </div>

        </React.Fragment>
     );
}
 
export default PNavBar;