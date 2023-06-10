import React from 'react';
import {useLocation} from 'react-router-dom';
import WNavBar from './warehouseNavigation';

const WRoutes = () => {
    const location = useLocation();
    const includePaths = ['/AddItems','/ItemDetails','/IssueItems']; // include only these paths to render navbar in warehouse
    return ( 
        <React.Fragment> 

         {includePaths.includes(location.pathname) && <WNavBar />}

        </React.Fragment>
     );
}
 
export default WRoutes;