import React, { useState } from "react";
import { DatePicker } from "antd";
import Button1 from './Button'



  const SelectMenu = () => (
    <select class="custom-select custom-select-lg mb-3">
    <option selected>Select </option>
    <option value="1">Person 1</option>
    <option value="2">Person 2</option>
    <option value="3">Person 3</option>
  </select>
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

  

    <table class="table table-striped mt-3">
      <thead>
      <tr>
        <th scope="col">NIC</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Address</th>
        <th scope="col">Delivery Person</th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td> 199556500987</td>
        <td>Kamal Perera</td>
        <td>072367542</td>
        <td>79, School Lane, Galle</td>
        <td><SelectMenu/></td>
      </tr>
    
     </tbody>
     </table>

   
    
    


  
     <div class="d-flex justify-content-end align-items-end mb-3">
    <Button1 style="margin-bottom: 100px;" variant="secondary" bg="grey" text="Select For Delivery" textColor="dark" page="/PackageRequsition1" />
  </div>


</React.Fragment>
    
  );
};

export default UpcomingDelivery2 ;