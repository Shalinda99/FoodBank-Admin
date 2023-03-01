import React from 'react'
//import Box from './Box';
//import Button from 'react-bootstrap/Button';
import Button from './Button';

const buttonCellStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

const ButtonCell = () => {
  return (
   
      <button type="button" class="btn btn-warning">Select</button>
    
  );
};

const VictimInfo2 = () => {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Select For Delivery </div>
      </div>
      
  

      <table class="table table-striped mt-3">
      <thead>
      <tr>
        <th scope="col">NIC</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Address</th>
        <th scope="col">Select For Delivery</th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td> 199556500987</td>
        <td>Kamal Perera</td>
        <td>072367542</td>
        <td>79, School Lane, Galle</td>
        <td> <ButtonCell /></td>
      </tr>
    
     </tbody>
     </table>

  

    <div class="d-flex justify-content-end align-items-end mb-3">
      
        <Button style="margin-bottom: 20px;" variant="secondary" bg="grey" text="Select Delivery Person" textColor="dark" page="/UpcomingDelivery1" />
      
    </div>

</React.Fragment>
  )
}

export default VictimInfo2;