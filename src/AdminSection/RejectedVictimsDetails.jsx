import React, { useEffect, useState } from "react";
import Button1 from "./Button1";
import { Dropdown } from "react-bootstrap";

const RejectedVictimsDetails = () => {
  const [rejectedData,setRejectedData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/Victim/viewRejectedVictims'); 
      const jsonData = await response.json();
      setRejectedData(jsonData);
    };

    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div>
      <div class="dropdown d-flex justify-content-end">
      <div class="d-flex justify-content-start  mb-3 ">
      <Button1
            text="View Accepted List"
            textColor="dark"
            page="/AcceptedVictimsDetails"
          />
        </div>

        </div>
        <h2>Rejected Victims Details</h2>
        <br />

        <div>
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
            {rejectedData.map((details)=>(
          (
      <tr key={details.id}>
        <td> {details.nic}</td>
        <td>{details.firstName} {details.lastName}</td>
        <td>{details.phoneNumber}</td>
        <td>{details.no} {details.street} {details.city}</td>
      </tr> )    )  )}
              {/* <tr>
                <td>204059X</td>
                <td>Kamal Perera</td>
                <td>0769442613</td>
                <td>Galle</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RejectedVictimsDetails;
