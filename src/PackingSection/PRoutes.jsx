import React from 'react';
import {useLocation} from 'react-router-dom';
import PNavBar from './PackingSideNavigation';



const PRoutes = () => {


    const location = useLocation();
    const includePaths = ['/packingSection','/addPackages','/issuePackages']; // include only these paths to render navbar
    return ( 
        <React.Fragment>
        
         
         {includePaths.includes(location.pathname) && <PNavBar />}


        

        </React.Fragment>
     );
}
 
export default PRoutes;