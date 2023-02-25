import React from 'react'
import Box from './Box';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Button1 from './Button1';

const buttonCellStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

const ButtonCell = () => {
  return (
    <td>
      <Button variant="warning" style={{ width: "100px", height: "25px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Select
      </Button>
    </td>
  );
};

const VictimInfo2 = () => {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Select For Delivery </div>
      </div>
      
      <Box>
      <Table striped>
      <thead>
        <tr>
          <th>NIC</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Select For Delivery</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>199556500987</td>
          <td>Kamal Perera</td>
          <td>072367542</td>
          <td>79, School Lane, Galle</td>
          <td><ButtonCell /></td>
        </tr>
      </tbody>

    </Table>
    </Box>

    <div class="d-flex justify-content-end align-items-end mb-3">
      <div class="align-self-end ml-10 "> 
        <Button1 style="margin-top: 20px;" variant="secondary" bg="grey" text="Select Delivery Person" textColor="dark" page="/UpcomingDelivery1" />
      </div>
    </div>

</React.Fragment>
  )
}

export default VictimInfo2;