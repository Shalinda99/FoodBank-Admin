import React from 'react'
import Box from './Box';
import Button from './Button1';
import Table from 'react-bootstrap/Table';


const VictimInfo1 = () => {
  return (
    <React.Fragment>
    
    <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Victim Details</div>
    </div>
    
      <Box>
      <Table striped>
      <thead>
         <tr>
          <th>NIC</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
         </tr>
      </thead>

      <tbody>
        <tr>
          <td>199556500987</td>
          <td>Kamal Perera</td>
          <td>072367542</td>
          <td>79, School Lane, Galle</td>
        </tr>
      </tbody>
      </Table>
        
      </Box>
     
    
     <div class="d-flex justify-content-end align-items-end mb-3">
        <div class="align-self-end ml-10 "> 
         <Button style="margin-top: 20px;" variant="secondary" bg="grey" text="Select For Delivery" textColor="dark" page="/VictimInfo2" />
        </div>
     </div>

     
    </React.Fragment>
  );
};

export default VictimInfo1;
