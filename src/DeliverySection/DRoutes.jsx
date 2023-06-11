import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import DNavBar from './DeliverySideNavigation';

const DRoutes = () => {
  const location = useLocation();
  const includePaths = [
    '/deliverySection',
    '/VictimInfo1',
    '/UpcomingDelivery2',
    '/PackageRequsition1',
    '/PackageRequsition2',
    '/DeliveryStatus1',
    '/DeliveryStatus2',
    '/foodDonations',
    '/collectionSummary'
  ];
  
    

  // Get the user role from local storage
  const userRole = localStorage.getItem('userRole');

  // Check if the user has the required role
  const hasAccess = userRole === 'DeliverySection';

//   if (!hasAccess) {
//     // If the user doesn't have the required role, redirect them to the login page or another appropriate page
//     return <Navigate to="/" />;
//   }

  return (
    <React.Fragment>
      {includePaths.includes(location.pathname) && <DNavBar />}
      {/* Render your routes here */}
    </React.Fragment>
  );
};

export default DRoutes;
