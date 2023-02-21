import React from 'react';
import {useLocation} from 'react-router-dom';
import PNavBar from './PackingSideNavigation';
import AddPackages from './AddPackages';
import PackageIsues from './PackageIsuues';
import PackingHome from './PackingHome';


const PRoutes = () => {
    const location1 = useLocation();
    const currentRoute = location1.pathname; 

    const location = useLocation();
    const includePaths = ['/packingSection','/addPackages','/issuePackages']; // include only these paths to render navbar
    return ( 
        <React.Fragment>
            <div className='d-flex '>
         
         {includePaths.includes(location.pathname) && <PNavBar />}

         <div className='main-content d-flex flex-column w-100 me-4 '>
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
        

        </React.Fragment>
     );
}
 
export default PRoutes;