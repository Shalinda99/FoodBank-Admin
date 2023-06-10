import './App.css';
import React from 'react';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Login';
import PRoutes from './PackingSection/PRoutes';
import VictimInfo1 from './DeliverySection/VictimInfo1';
import DRoutes from './DeliverySection/DRoutes';
import ARoutes from './AdminSection/ARoutes';
import WRoutes from './warehouse/WRoutes';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      
      
      </Routes>
      <PRoutes/>
      <DRoutes/>
      <ARoutes/>
      <WRoutes/>



      {/* <Route path='/deliverySection' element={<DeliveryHome/>}/> */}
      
        
       
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
