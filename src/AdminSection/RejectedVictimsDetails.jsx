import React, { useEffect, useState } from "react";
import Button1 from "./Button1";

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
          <button
            class="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <div class="d-flex justify-content-start  mb-3 ">
          <Button1
            text="View Accepted List"
            textColor="dark"
            page="/AcceptedVictimsDetails"
          />
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
                <th scope="col">Location</th>
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
