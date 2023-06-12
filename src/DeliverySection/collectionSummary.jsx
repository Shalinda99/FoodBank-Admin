
import React, { useState, useEffect } from "react";
import axios from "axios";

const CollectionSummary = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/FoodDonate/collected'); 
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);
    return ( 
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Received Food Donations</div>
      </div>

      <table class="table table-striped mt-3">
      <thead>
      <tr>
      <th scope="col">ID</th>
        <th scope="col">Address</th>
        <th scope="col">Date</th>
        <th scope="col">Location</th>
       
       
      </tr>
      </thead>

      <tbody>

      {/* <tr>
        <td> 199</td>
        <td>79, School Lane, Galle</td>
        <td>2023.06.13</td>
        <td>Galle</td>
        <td > <div className="d-flex justify-content-start">
            <button className='btn btn-warning me-3'>Collected</button>
            <button className='btn btn-danger'>Not-available</button>
            </div> </td>
      </tr> */}

      {data.map((details)=>(
        (
          <tr >
            <td>{details.donationId}</td>
          <td> {details.donationAddress}</td>
          <td>{details.donationDate}</td>
          <td>{details.nearestLocation}</td>
          
          <td > <div className="d-flex justify-content-start">
              
              </div> </td>
        </tr>
        )
      ))}
    
     </tbody>
     </table>
        </React.Fragment>
     );
}
 
export default CollectionSummary;




