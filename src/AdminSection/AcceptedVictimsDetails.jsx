import React from "react";
import Button1 from "./Button1";
import "./Button.css";
import { Dropdown } from "react-bootstrap";

import { useState, useEffect } from "react";

const AcceptedVictimsDetails = () => {
  const [isVerified, setIsVerified] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Victim/viewAcceptedVictims")
      .then((response) => response.json())
      .then((data) => setIsVerified(data));
  }, []);

  const [date, setDate] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/packageTypes/viewPackageType")
      .then((response) => response.json())
      .then((jsondata) => setData(jsondata));
  }, []);
  const SelectMenu = () => (
    <select class="custom-select custom-select-lg mb-3">
      <option selected>Select </option>
      {data.map((details, index) => (
        <option key={index} value={details.typeName}>
          {details.typeName}
        </option>
      ))}
    </select>
  );

  return (
    <React.Fragment>
      <div>
        <div class="dropdown d-flex justify-content-end">
        <div class="d-flex justify-content-start  mb-3 ">
        <Button1
            text="View Rejected List"
            textColor="dark"
            page="/RejectedVictimsDetails"
          />
        </div>

        </div>
        

        <h2>Accepted Victims Details</h2>
        <br />

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">NIC</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Package Type</th>
                <th scope="col">Save</th>
              </tr>
            </thead>

            <tbody>
              {isVerified.map((details) => (
                <tr key={details.id}>
                  <td> {details.nic}</td>
                  <td>
                    {details.firstName} {details.lastName}
                  </td>
                  <td>{details.phoneNumber}</td>
                  <td>
                    {details.no} {details.street} {details.city}
                  </td>
                  <td>
                    <SelectMenu />
                  </td>
                  <button type="button" class="btn btn-info">
                    Save
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AcceptedVictimsDetails;

