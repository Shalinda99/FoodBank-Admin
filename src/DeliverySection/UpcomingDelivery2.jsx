import React, { useState,useEffect } from "react";


const UpcomingDelivery2 = () => {
  const [vdata, setVData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/Victim/viewToDelivery'); // replace this with the actual API endpoint
      const jsonData = await response.json();
      setVData(jsonData);
    };

    fetchData();
  }, []);
  const [date, setDate] = useState(null);
  const[data,setData]=useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/DeliveryPerson/viewDeliveryPerson")
      .then((response) => response.json())
      .then((jsondata) => setData(jsondata));
  }, []);
  const SelectMenu = () => (
    <select class="custom-select custom-select-lg mb-3">
    <option selected>Select </option>
    {data.map((item, index) => (
          <option key={index} value={item.deliveryPersonName}>{item.deliveryPersonName}</option>
        ))}
  </select>
  );
  





  // const handleChange = (selectedDate) => {
  //   setDate(selectedDate);
  // };


 
  return (
    <React.Fragment>
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-row">
         <div className="p-1">
         <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Select Delivery Person</h3>
         </div>

         {/* <div className="p-1">
         <DatePicker onChange={handleChange} />
         </div> */}
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
        <th scope="col">Delivery Date</th>
        
      </tr>
      </thead>

      <tbody>
      {vdata.map((details)=>(
          (
      <tr key={details.id}>
        <td> {details.nic}</td>
        <td>{details.firstName} {details.lastName}</td>
        <td>{details.phoneNumber}</td>
        <td>{details.no} {details.street} {details.city}</td>
        <td><SelectMenu/></td>
        {/* <td> <DatePicker onChange={handleChange} /></td> */}
        <td><input type="date" className="form-control"/></td>
      </tr> )    )  )}
    
     </tbody>
     </table>
  
     {/* <div class="d-flex justify-content-end align-items-end mb-3">
    <Button1 style="margin-bottom: 100px;" variant="secondary" bg="grey" text="Select For Delivery" textColor="dark" page="/PackageRequsition1" />
  </div> */}


</React.Fragment>
    
  );
};

export default UpcomingDelivery2 ;