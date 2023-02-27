import React, { useState } from "react";
import { DatePicker } from "antd";
import Box from './Box';
import Button1 from './Button';




const UpcomingDelivery1 = () => {
      const [date, setDate] = useState(null);

      const handleChange = (selectedDate) => {
      setDate(selectedDate);
  };

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex flex-row">
          <div className="p-1">
             <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Upcoming Delivery</h3>
          </div>

          <div className="p-1">
          <DatePicker onChange={handleChange} />
          </div>

        </div>
      </div>

       <Box>

      <table class="table table-striped">
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

      </Box>
      
      
        <div class="d-flex justify-content-end align-items-end ">
          <div class="align-self-end ml-10 "> 
            <Button1 style="margin-bottom: 100px;" variant="secondary" bg="grey" text="Select Delivery Person" textColor="dark" page="/UpcomingDelivery2" />
          </div>      
      </div>

</React.Fragment>
    
  );
};

export default UpcomingDelivery1;