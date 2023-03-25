import React from 'react'
//import Button from './Button';
import { useState,useEffect } from 'react';



const VictimInfo1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/Victim/viewAllVerifiedVictims'); 
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);
  //putmapping
  const handleSelect = async (id) => {
    const response = await fetch(`http://localhost:8080/Victim/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isDelivered: true
      })
    });
  
    if (response.ok) {
      // handle success response
      console.log('Victim updated successfully');
    } else {
      // handle error response
      console.error('Error updating victim');
    }
  };
  

  return (
    <React.Fragment>
    <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Victim Details</div>
    </div>
  <table className="table table-striped mt-3 " >
      <thead>
      <tr>
        <th scope="col">NIC</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Address</th>
        <th scope="col">Select For Delivery</th>
      </tr>
      </thead>
      <tbody>
        {data.map((details)=>(
          (
      <tr key={details.id}>
        <td> {details.nic}</td>
        <td>{details.firstName} {details.lastName}</td>
        <td>{details.phoneNumber}</td>
        <td>{details.no} {details.street} {details.city}</td>
        <td><button type="button" class="btn btn-warning" onClick={() => handleSelect(details.id)}>Select</button>
      </td>
      </tr> )    )  )}
     </tbody>
     </table>
    </React.Fragment>
  );
};


export default VictimInfo1;
