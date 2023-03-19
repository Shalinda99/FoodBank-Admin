import React from 'react';
import Dashboard from '../AdminDashBoard/Dashboard';
import Approutes from '../AdminDashBoard/DashBoardRoutes';

const AdminHome = () => {
    return ( 
        <React.Fragment>

         <h1>Dashboard</h1>
         <Dashboard/>
        </React.Fragment>
     );
}
 
export default AdminHome;