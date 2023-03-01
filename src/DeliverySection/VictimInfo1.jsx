import React from 'react'
import Button from './Button';

const VictimInfo1 = () => {
  return (
    <React.Fragment>
    
    <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Victim Details</div>
    </div>
    
      
    

  <table class="table table-striped mt-3 " >
      <thead>
      <tr>
        <th scope="col">NIC</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Address</th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td> 199556500987</td>
        <td>Kamal Perera</td>
        <td>072367542</td>
        <td>79, School Lane, Galle</td>
      </tr>

     
    
     </tbody>
     </table>


     
        
      

    
     
    
     <div class="d-flex justify-content-end align-items-end mb-3">
        
         <Button style="margin-bottom: 20px;" variant="secondary" bg="grey" text="Select For Delivery" textColor="dark" page="/VictimInfo2" />
      
     </div>

     
    </React.Fragment>
  );
};

export default VictimInfo1;
