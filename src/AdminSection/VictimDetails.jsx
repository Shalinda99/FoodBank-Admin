// import React from 'react';
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
// import axios from 'axios';


import React, { useState, useEffect } from "react";
import  {useNavigate} from "react-router-dom";



const VictimDetails = () => {
  const [victims, setVictims] = useState([]);
  // const [acceptedVictims, setAcceptedVictims] = useState([]);
  // const history = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8080/Victim/viewUnverifiedVictims")
      .then((response) => response.json())
      .then((jsondata) => setVictims(jsondata));
  }, []);

  //putmapping
  const handleSelect = async (id) => {
    const response = await fetch(`http://localhost:8080/Victim/select/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isVerified: true,
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
      </div>

      <div class="d-flex justify-content-start  mb-3 mt-3">
        <div>
          <Button1
            text="View Accepted List"
            textColor="dark"
            page="/AcceptedVictimsDetails"
          />
        </div>
        <div className="ms-2">
          <Button1
            text="View Rejected List"
            textColor="dark"
            page="/RejectedVictimsDetails"
          />
        </div>
      </div>

      <br />

      {victims.map((victim) => (
        console.log(victim.firstName),
        <div key={victim.id}>
          <div class="card bg-light text-dark">
            <div class="card-body">
              <h4>Data Supplier: D.K Perera</h4>
              <br />

              <p>
                Victim NIC: {victim.nic}
                <br />
                Victim Name: {victim.firstName} {victim.lastName}
                <br />
                Contact: {victim.phoneNumber}
                <br />
                Address:{victim.no} {victim.street} {victim.city}{" "}
                <br/>
                Description:{victim.Description}
              </p>

              <div class="btn d-flex justify-content-end">
                <div className="ms-2">
                <button type="button" class="btn btn-warning" onClick={() => handleSelect(victim.id)}>Accept</button>

                  {/* <Button2
                    text="Acceptsss"
                    textColor="dark"
                  /> */}
                  </div>

                <div className="ms-2">
                  {" "}
                  <button type="button" class="btn btn-warning" onClick={() => handleSelect(victim.id)}>Decline</button>
                </div>
              </div>
            </div>
          </div>

          <br />
        </div>
      ))}
    </React.Fragment>
  );
};

export default VictimDetails;
