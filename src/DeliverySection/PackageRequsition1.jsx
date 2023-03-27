
import React, { useState,useEffect } from "react";
import Button from './Button';


  const PackageRequsition1 = () => {
    const [vdata, setVData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/Victim/viewToDelivery'); // replace this with the actual API endpoint
      const jsonData = await response.json();
      setVData(jsonData);
    };

    fetchData();
  }, []);
    return (
      <React.Fragment>
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Package Requisition</div>
        </div>
        
      
     
    <table class="table table-striped mt-3">
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

  {vdata.map((details)=>(
          (
      <tr key={details.id}>
        <td> {details.nic}</td>
        <td>{details.firstName} {details.lastName}</td>
        <td>{details.phoneNumber}</td>
        <td>{details.no} {details.street} {details.city}</td>
        <td>Type A</td>
  
      </tr> )    )  )}
  
    
  </tbody>
  </table>
      
  
       
     
    <div class="d-flex justify-content-end align-items-end mb-3">
           <Button style="margin-top: 20px;" variant="secondary" bg="grey" text="Request Package" textColor="dark" page="/PackageRequsition2" />
    </div>

        
      </React.Fragment>
    );
  };
  export default PackageRequsition1;