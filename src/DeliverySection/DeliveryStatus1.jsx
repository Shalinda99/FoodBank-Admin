import React, { useState } from "react";
import Box from './Box';
import Table from 'react-bootstrap/Table';
import ToggleSwitch from "./ToggleButton";
import Button1 from "./Button1";



const DeliveryStatus1 = () => {
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);

  const handleSwitchChange1 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };
  const handleSwitchChange2 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };
  const handleSwitchChange3 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };
  const handleSwitchChange4 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };
  const handleSwitchChange5 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };

  const handleSwitchChange6 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };





  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Delivery Status</div>
      </div>

      <Box>
       <Table striped>
      <thead>
        <tr>
          
          <th>NIC</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Delivery Status</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td>199556500987</td>
          <td>Kamal Perera</td>
          <td>072367542</td>
          <td>79, School Lane, Galle</td>
          <td ><ToggleSwitch onChange={handleSwitchChange1} /></td>
        </tr>
       
        
      </tbody>
       </Table>
      </Box>
      
    
<div class="d-flex justify-content-end align-items-end ">
  <div class="align-self-end ml-10 "> 
    <Button1 variant="secondary" bg="grey" text="Next" textColor="dark" page="/DeliveryStatus2" />
  </div>
</div>

</React.Fragment>
    
  );
};

export default DeliveryStatus1 ;
