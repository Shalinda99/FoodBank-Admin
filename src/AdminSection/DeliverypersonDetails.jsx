import React from "react";
import { useState, useEffect } from "react";

const DeliveryPerson = () => {

  const [dperson, setDperson] = useState([]);
  // const [acceptedVictims, setAcceptedVictims] = useState([]);
  // const history = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8080/DeliveryPerson/viewDeliveryPerson")
      .then((response) => response.json())
      .then((jsondata) => setDperson(jsondata));
  }, []);

  return (
    <React.Fragment>
      <div>
        

        <div class="d-flex justify-content-start  mb-3 ">
     
        </div>
        <h2>Delivery Person Details</h2>
        <br />

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">NIC</th>
                <th scope="col">Name</th>
                
              </tr>
            </thead>

            <tbody>
            {dperson.map((details)=>(
          (
      <tr key={details.id}>
        <td> {details.deliveryPersonId}</td>
        <td>{details.deliveryPersonName}</td>
      </tr> )    )  )}
       </tbody>

            {/* <tbody>
              <tr>
                <td>204059X</td>
                <td>Kamal Perera</td>
                
              </tr>

            </tbody> */}
          </table>
        </div>
        <h2>Add Delivery Person</h2>
        <div className="container d-flex m-2">
          <div className="conteiner-100 d-flex justify-content-between ">
          <div className="container d-flex w-50 rounded m-3 bg-light p-3" style={{minHeight: "250px"}}>
            <h4 className="bg-secondary mt-1 p-2 rounded">Add a Delivery person</h4>
            <div className="form-floating mb-3 w-100 mt-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="ms-auto">
              <button type="button" className="btn btn-primary">Add</button>
            </div>
          </div>

            <div className="container d-flex w-50 rounded m-3 bg-light p-3 " style={{minHeight: "250px"}}>
            <h4 className="bg-secondary mt-1 p-2 rounded">Remove a Delivery person</h4>
            <div class="form-floating mb-3 w-100 mt-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="ID" />
            <label for="floatingInput">Provide the ID</label>
            </div>
            <div className="ms-auto">
            <button type="button" class="btn btn-warning">Remove</button>
            </div>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default DeliveryPerson;
