import React, { useState } from "react";
import ToggleSwitch from "./ToggleButton";
import Button from "./Button";



const DeliveryStatus1 = () => {
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);

  const handleSwitchChange1 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };
  /*const handleSwitchChange2 = () => {
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
  */




  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Delivery Status</div>
      </div>

      
       <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">NIC</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Address</th>
        <th scope="col">Delivery Status</th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td> 199556500987</td>
        <td>Kamal Perera</td>
        <td>072367542</td>
        <td>79, School Lane, Galle</td>
        <td > <div className="d-flex justify-content-center"><ToggleSwitch onChange={handleSwitchChange1} /></div> </td>
      </tr>
    
     </tbody>
     </table>
      
       <div class="d-flex justify-content-end align-items-end ">
         <Button variant="secondary" bg="grey" text="Next" textColor="dark" page="/DeliveryStatus2" />
       </div>

</React.Fragment>
    
  );
};

export default DeliveryStatus1 ;
