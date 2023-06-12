import React from 'react';
import {useLocation} from 'react-router-dom';
import ANavBar from './AdminSideNavigation';



const ARoutes = () => {


    const location = useLocation();
    const includePaths = ['/AdminHome','/DataSupplierDetails','/VictimDetails','/AcceptedVictimsDetails','/RejectedVictimsDetails','/userCreation']; // include only these paths to render navbar
    const userRole = localStorage.getItem('userRole');

    // Check if the user has the required role
    const hasAccess = userRole === 'Admin';
    return ( 
        <React.Fragment>
        
         
        {includePaths.includes(location.pathname) && <ANavBar />}


        

        </React.Fragment>
     );
}
 
export default ARoutes;
