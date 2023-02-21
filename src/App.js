import './App.css';
import React from 'react';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import AdminLogin from './Login';
import PRoutes from './PackingSection/PRoutes';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      </Routes>
      <PRoutes/>



      {/* <Route path='/deliverySection' element={<DeliveryHome/>}/> */}
      
        
       
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
