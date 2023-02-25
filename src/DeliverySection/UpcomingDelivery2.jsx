
import React, { useState } from "react";
import { DatePicker } from "antd";
import Box from './Box';
import Button1 from './Button1'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


const SelectMenu = () => (
    <Form.Select size="sm" style={{ width: "120px" }}>
      <option>Select</option>
      <option value="1">Person A</option>
      <option value="2">Person B</option>
      <option value="3">Person C</option>
    </Form.Select>
  );


const UpcomingDelivery2 = () => {
  const [date, setDate] = useState(null);

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

 
  return (
    <React.Fragment>
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-row">
         <div className="p-1">
         <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Select Delivery Person</h3>
         </div>

         <div className="p-1">
         <DatePicker onChange={handleChange} />
         </div>
      </div>
    </div>

    <Box>
     <Table striped>
      <thead>
        <tr>
          <th>NIC</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Delivery Person</th>
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
    
    

<div class="d-flex justify-content-end align-items-end mb-10">
  <div class="align-self-end ml-10 "> 
    <Button1 style="margin-bottom: 100px;" variant="secondary" bg="grey" text="Select For Delivery" textColor="dark" page="/PackageRequsition1" />
  </div>
</div>

</React.Fragment>
    
  );
};

export default UpcomingDelivery2 ;