import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Button1 from "./Button1";
import axios from 'axios';
import { useState, useEffect } from "react";


const DataSupplierProfile = () => {

  const [dsupplier, setDsupplier] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/RegisteredUser/getDataSupplier')
      .then((response) => setDsupplier(response.data))
      .catch((error) => console.log(error));
  }, []);



  return (
    <React.Fragment>
      <div>
      {dsupplier.map((details) => (
        <div key={details.id}>
        <div class="card bg-light text-dark">
          <div class="card-body">
            <h5>Name:{details.firstName}&nbsp;{details.lastName}</h5>
            <h5>User_ID:{details.id}</h5>
            <h5>Telephone:{details.contactNumber}</h5>
            <h5>Email:{details.email}</h5>
            <div>
              <h5>Point Rate</h5>

              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar w-75"></div>
              </div>
              <br />

              <div class="d-flex justify-content-start  mb-3 mt-3 ">
                <button type="button" class="btn btn-outline-dark ms-2">
                  <AiFillDelete className="icon" />
                  Suspend
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
      </div>
    </React.Fragment>
  );
};

export default DataSupplierProfile;

