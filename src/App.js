import './App.css';
import React from 'react';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import AdminLogin from './Login';
import PackingHome from './PackingSection/PackingHome';
import DeliveryHome from './DeliverySection/DeliveryHome';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      <Route path='/packingSection' element={<PackingHome/>}/>
      <Route path='/deliverySection' element={<DeliveryHome/>}/>
      </Routes>
        
       
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
