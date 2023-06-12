// DataSupplierDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const DataSupplierDetails = () => {
  const [dsupplier, setDsupplier] = useState([]);
  const [dataSupplierCount, setDataSupplierCount] = useState(0);


  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate('/DataSupplierProfile/${id}');
  };

  const handleSuspend = (id) => {
    setDsupplier((prevDsupplier) =>
      prevDsupplier.filter((supplier) => supplier.id !== id)
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/RegisteredUser/getDataSupplier")
      .then((response) => setDsupplier(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/RegisteredUser/data-suppliers/count")
      .then((response) => setDataSupplierCount(response.data))
      .catch((error) => console.log(error));
  }, []);
  



  return (
    <React.Fragment>
      <div>
        <div>
          <div>
            <div>
              <h3>Data Supplier Statistics</h3>

              <div className="cardcontainer d-flex  justify-content-around mt-4 text-white  ">
                <div className="card1 mb-4 rounded  text-center card bg-dark ">
                  <div className="m-2">
                    <p>Total DataSuppliers</p>
                    <h2>{dataSupplierCount}</h2>
                  </div>
                </div>

                <div className="card2 mb-4 rounded  text-center card bg-secondary ">
                  <div className="m-2">
                    <p>Minimum Point Level</p>
                    <h2>40</h2>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>

          <br />

          <div>
            <h3>Data Supplier Details</h3>

            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Data_Supplier_ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Points</th>
                    <th scope="col">Suspend</th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  {dsupplier.map((details) => (
                    <tr key={details.id}>
                      <td>{details.id}</td>
                      <td>
                        {details.firstName} &nbsp; {details.lastName}
                      </td>
                      <td>{details.dataSupplierPoints}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => handleSuspend(details.id)}
                        >
                          Suspend
                        </button>
                      </td>
                      <td>{/* See Profile button */}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataSupplierDetails;
