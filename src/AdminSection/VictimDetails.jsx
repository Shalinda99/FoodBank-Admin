// import React from 'react';
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
// import axios from 'axios';
import { Dropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const handleAcceptSelect = async (id, donaterId) => {
    const response = await fetch(
      `http://localhost:8080/Victim/selectAccept/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isVerified: true,
          isAccepted: true,
          donaterId: donaterId,
        }),
      }
    );
  
    if (response.ok) {
      // handle success response
      console.log("Victim updated successfully");
    } else {
      // handle error response
      console.error("Error updating victim");
    }
  };
  
  const handleRejectSelect = async (id,donaterId) => {
    const response = await fetch(
      `http://localhost:8080/Victim/selectReject/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isVerified: true,
          isAccepted: false,
          donaterId: donaterId
        }),
      }
    );
    if (response.ok) {
      // handle success response
      console.log("Victim updated successfully");
    } else {
      // handle error response
      console.error("Error updating victim");
    }
  };

  return (
    <React.Fragment>
      <div>
      <div class="dropdown d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action/1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action/2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action/3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

      {victims.map(
        (victim) => (
          console.log(victim.user.firstName),
          (
            <div key={victim.id}>
              <div class="card bg-light text-dark">
                <div class="card-body">
                  <h4>{victim.user.firstName}</h4>
                  <br />

                  <p>
                    Victim NIC: {victim.nic}
                    <br />
                    Victim Name: {victim.firstName} {victim.lastName}
                    <br />
                    Contact: {victim.phoneNumber}
                    <br />
                    Address:{victim.no} {victim.street} {victim.city} <br />
                    Description:{victim.description}
                  </p>

                  <div class="btn d-flex justify-content-end">
                    <div className="ms-2">
                      <button
                        type="button"
                        class="btn btn-outline-warning"
                        onClick={() => handleAcceptSelect(victim.id,victim.donaterId)}
                      >
                        Accept
                      </button>
                    </div>

                    <div className="ms-2">
                      {" "}
                      <button
                        type="button"
                        class="btn btn-outline-warning"
                        onClick={() => handleRejectSelect(victim.id,victim.donaterId)}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <br />
            </div>
          )
        )
      )}
    </React.Fragment>
  );
};

export default VictimDetails;
