import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Button1 from "./Button1";

const DataSupplierProfile = () => {
  return (
    <React.Fragment>
      <div>
        <div class="card bg-light text-dark">
          <div class="card-body">
            <h5>Name:Tharushni Gamage</h5>
            <h5>User_ID: 06537564</h5>
            <h5>Telephone No: 011-3554789</h5>
            <h5>Email:tharushnigamage@gmail.com</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
    </React.Fragment>
  );
};

export default DataSupplierProfile;
