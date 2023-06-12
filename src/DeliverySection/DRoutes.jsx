import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import DNavBar from './DeliverySideNavigation';

const DRoutes = () => {


    const location = useLocation();
<<<<<<<<< Temporary merge branch 1
    const includePaths = ['/deliverySection','/VictimInfo1','/UpcomingDelivery2' ,
    '/PackageRequsition1' ,'/PackageRequsition2','/DeliveryStatus1' ,'/DeliveryStatus2','/foodDonations','/collectionSummary']; // include only these paths to render navbar
=========
    const includePaths = ['/deliverySection','/VictimInfo1','/VictimInfo2','/UpcomingDelivery1' ,'/UpcomingDelivery2' ,
    '/PackageRequsition1' ,'/PackageRequsition2','/DeliveryStatus1' ,'/DeliveryStatus2','/collectDonations']; // include only these paths to render navbar
>>>>>>>>> Temporary merge branch 2
    return ( 
        <React.Fragment>
        
        
         {includePaths.includes(location.pathname) && <DNavBar />}


        

        </React.Fragment>
     );
}
 
export default DRoutes;
