import React from 'react';
import {useLocation} from 'react-router-dom';
import DNavBar from './DeliverySideNavigation' ;


const DRoutes = () => {


    const location = useLocation();
    const includePaths = ['/deliverySection','/VictimInfo1','/VictimInfo2','/UpcomingDelivery1' ,'/UpcomingDelivery2' ,
    '/PackageRequsition1' ,'/PackageRequsition2' ,'/DeliveryStatus2']; // include only these paths to render navbar
    return ( 
        <React.Fragment>
        
        
         {includePaths.includes(location.pathname) && <DNavBar />}


        

        </React.Fragment>
     );
}
 
export default DRoutes;