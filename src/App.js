import './App.css';
import React from 'react';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import AdminLogin from './Login';
import PackingHome from './PackingSection/PackingHome';
import DeliveryHome from './DeliverySection/DeliveryHome';
import PNavBar from './PackingSection/PackingSideNavigation';
import AddPackages from './PackingSection/AddPackages';
import PackageIsues from './PackingSection/PackageIsuues';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      </Routes>

      <PNavBar/>
      <Routes>
      <Route path='/packingSection' element={<PackingHome/>}/>
      <Route path='/addPackages' element={<AddPackages/>} />
      <Route path='/issuePackages' element={<PackageIsues/>} />
      </Routes>

      {/* <Route path='/deliverySection' element={<DeliveryHome/>}/> */}
      
        
       
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
