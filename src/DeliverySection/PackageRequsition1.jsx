import React from "react";
import Box from './Box';
import Button from './Button';


  const PackageRequsition1 = () => {
    return (
      <React.Fragment>
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Package Requisition</div>
        </div>
        
        <Box>
     
    <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">NIC</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
      <th scope="col">Package Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>199556500987</td>
      <td>Kamal Perera</td>
      <td>072367542</td>
      <td>79, School Lane, Galle</td>
      <td>Type A</td>
    </tr>
    
  </tbody>
  </table>
      </Box>
  
       
      <div class="d-flex justify-content-end align-items-end mb-3">
        <div class="align-self-end ml-10 "> 
           <Button style="margin-top: 20px;" variant="secondary" bg="grey" text="Request Package" textColor="dark" page="/PackageRequsition2" />
        </div>
      </div>

        
      </React.Fragment>
    );
  };
  export default PackageRequsition1;