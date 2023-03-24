import React from 'react'
import Box2 from './Box2';
import './Box2.css';
import "./ProgressBar.css";
import ProgressBar from "./ProgressBar";

const data = [
    { id: 1, progress: 70 },
   
  ];
  
const DeliveryStatus2 = () => {
  return (
    <React.Fragment>
    
    <div className="d-flex align-items-center justify-content-center">
       <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Delivery Status </div>
    </div>
    
    <div class=" maincontainer d-flex justify-content-around">
  <div>   <Box2 text=" Delivered : 60 Packages" /> </div>
  <div> <Box2 text=" On Route : 40 Packages" /></div>
    
      
      
      
    </div>


    <div>
       <div class="progress-wrap">
          <div class="progress-text" >Successful</div>
              <div>
              {data.map(item => (
               <ProgressBar key={1} progress={60} />
               ))}
              </div>
        </div>

        <div class="progress-wrap" >
          <div class="progress-text" >On Route</div>
            <div>
            {data.map(item => (
            <ProgressBar key={2} progress={40} />
            ))}
            </div>
        </div>
    </div>

   </React.Fragment>
  );
};

export default DeliveryStatus2;
