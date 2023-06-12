import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import PNavBar from './PackingSideNavigation';
import { ToastContainer, toast } from 'react-toastify';

const PRoutes = () => {
  const location = useLocation();
  const includePaths = ['/packingSection', '/addPackages', '/issuePackages'];
  
  // Get the user role from local storage
  const userRole = localStorage.getItem('userRole');
  
  // Check if the user has the required role
  const hasAccess = userRole === 'PackingSection';
  
  
  
  return (
    <React.Fragment>
      {includePaths.includes(location.pathname) && <PNavBar />}
      {/* Render your routes here */}
    </React.Fragment>
  );
};

export default PRoutes;
