
import React from "react";
import Box from './Box';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Table from 'react-bootstrap/Table';
import Button1 from './Button1';

const SelectMenu = () => (
    <Form.Select size="sm" style={{ width: "120px" }}>
      <option>Select</option>
      <option value="1">Type A</option>
      <option value="2">Type B</option>
      <option value="3">Type C</option>
    </Form.Select>
  );



 

  const PackageRequsition1 = () => {
    return (
      <React.Fragment>
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Package Requisition</div>
        </div>
        
        <Box>
      <Table striped>
      <thead>
        <tr>
          <th>NIC</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Package Type</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>199556500987</td>
          <td>Kamal Perera</td>
          <td>072367542</td>
          <td>79, School Lane, Galle</td>
          <td><SelectMenu/></td>
        </tr>
      </tbody>


      </Table>
      </Box>
  
       
      <div class="d-flex justify-content-end align-items-end mb-3">
        <div class="align-self-end ml-10 "> 
           <Button1 style="margin-top: 20px;" variant="secondary" bg="grey" text="Request Package" textColor="dark" page="/PackageRequsition2" />
        </div>
      </div>

        
      </React.Fragment>
    );
  };
  export default PackageRequsition1;