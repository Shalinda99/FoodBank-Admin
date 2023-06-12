import React,{useState} from 'react';
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import {
    FaBars,
    FaUserAlt,
    FaPalfed,
}from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import './DeliveryNavBar.css';
import VictimInfo1 from './VictimInfo1';
import UpcomingDelivery2 from './UpcomingDelivery2';
import PackageRequsition1 from './PackageRequsition1';
import PackageRequsition2 from './PackageRequsition2';
import DeliveryStatus1 from './DeliveryStatus1';
import DeliveryStatus2 from './DeliveryStatus2';
import CollectDonations from './collectDonations';
import {AiOutlineAppstoreAdd}from "react-icons/ai";
import FoodDonation from './foodDonations';
import CollectionSummary from './collectionSummary';

const PNavBar = ({children}) => {

    const location1 = useLocation();
    const currentRoute = location1.pathname; 

    const[isOpen ,setIsOpen] = useState(false); //for the toggle in nav bar
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        
        {
            path:"/VictimInfo1",
            name:"Victim Details",
            icon:<FaUserAlt/>
        },
        {
            path:"/UpcomingDelivery2",
            name:"Upcoming Delivery",
            icon:<MdOutlineDeliveryDining/>
        },
        {
            path:"/PackageRequsition1",
            name:"Packing Requisition",
            icon:<FaPalfed/>
        },
        {
            path:"/DeliveryStatus1",
            name:"Delivery Status",
            icon:<BsGraphUp/>
        },
        {
            path:"/collectDonations",
            name:"Collect Donations",
            icon:<AiOutlineAppstoreAdd/>
        }
      
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
                <h1>Food Bank - Delivery Section</h1>
                </div> 
            
            <div className='w-100 p-3 m-2'>
                {/* conditional render */}
                {currentRoute === '/deliverySection' && <VictimInfo1/>} 
                {currentRoute === '/VictimInfo1' && <VictimInfo1/>} 
                {currentRoute === '/UpcomingDelivery2' && <UpcomingDelivery2/>} 
                {currentRoute === '/PackageRequsition1' && <PackageRequsition1/>} 
                {currentRoute === '/PackageRequsition2' && <PackageRequsition2/>} 
                {currentRoute === '/DeliveryStatus1' && <DeliveryStatus1/>} 
                {currentRoute === '/DeliveryStatus2' && <DeliveryStatus2/>} 
                {currentRoute==='/collectDonations' && <CollectDonations/>}
                {currentRoute === '/foodDonations' && <FoodDonation/>} 
                {currentRoute === '/collectionSummary' && <CollectionSummary/>} 
            </div>
        </div>
        </div>    
        </div>

        </React.Fragment>
     );
}
 
export default PNavBar;