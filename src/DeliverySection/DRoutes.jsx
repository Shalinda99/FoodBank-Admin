import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import DNavBar from './DeliverySideNavigation';

const DRoutes = () => {


    const location = useLocation();


    const includePaths = ['/deliverySection','/VictimInfo1','/VictimInfo2','/UpcomingDelivery1' ,'/UpcomingDelivery2' ,
    '/PackageRequsition1' ,'/PackageRequsition2','/DeliveryStatus1' ,'/DeliveryStatus2','/collectDonations','/foodDonations','/collectionSummary']; // include only these paths to render navbar

    return ( 
        <React.Fragment>
        
        
         {includePaths.includes(location.pathname) && <DNavBar />}


        

        </React.Fragment>
     );
}
 
export default DRoutes;
