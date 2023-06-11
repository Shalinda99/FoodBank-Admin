import React, { useState,useEffect } from "react";
import "./Packing.css";
import axios from "axios";

const PackingHome = () => {

  const [type1Quantity, setType1quantity] = useState(0);
  const [type2Quantity, setType2quantity] = useState(0);
  const [type3Quantity, setType3quantity] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/packedPackages/viewPackedPackages")
      .then((response) => {
        

        // Retrieve quantities for typeIDs 1, 2, and 3
        axios
          .get("http://localhost:8080/packageTypes/101/quantity")
          .then((quantityResponse) => setType1quantity(quantityResponse.data))
          .catch((error) => console.log(error));

        axios
          .get("http://localhost:8080/packageTypes/102/quantity")
          .then((quantityResponse) => setType2quantity(quantityResponse.data))
          .catch((error) => console.log(error));

        axios
          .get("http://localhost:8080/packageTypes/103/quantity")
          .then((quantityResponse) => setType3quantity(quantityResponse.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);
  

  const [showColumn1, setShowColumn1] = useState(false);
  const [items, setItems] = useState([5, 2, 3, 5, 2, 8, 3, 8]);
  const [newItems, setNewItems] = useState(Array(8).fill(""));

  const [showColumn2, setShowColumn2] = useState(false);
  const [items2, setItems2] = useState([8,7,6,5,4,3,2,1]);
  const [newItems2, setNewItems2] = useState(Array(8).fill(""));

  const [showColumn3, setShowColumn3] = useState(false);
  const [items3, setItems3] = useState([1,2,3,4,5,6,7,8]);
  const [newItems3, setNewItems3] = useState(Array(8).fill(""));

//type 1
  const handleClick1 = () => {
    setShowColumn1(true);
  };

  const handleSet1 = () => {
    setShowColumn1(false);

    setItems(items.map((item, index) => parseInt(newItems[index])));
    setNewItems(Array(8).fill(""));
  };

  //type 2
  const handleClick2 = () => {
    setShowColumn2(true);
  };

  const handleSet2 = () => {
    setShowColumn2(false);

    setItems2(items2.map((item, index) => parseInt(newItems2[index])));
    setNewItems2(Array(8).fill(""));
  };

  //type 3
  const handleClick3 = () => {
    setShowColumn3(true);
  };

  const handleSet3 = () => {
    setShowColumn3(false);

    setItems3(items3.map((item3, index) => parseInt(newItems3[index])));
    setNewItems3(Array(8).fill(""));
  };
  return (
    <React.Fragment>


      <div className="m-2 w-100">
        
        <div className="types m-2 p-1 d-flex justify-content-around">
            {/* type 1 */}
          <div className="badge bg-secondary w-50 p-4 m-2 mb-2 fs-5">
            <div>
              Package Type 1
              <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
                {type1Quantity}
              </span>
            </div>
            <div className="tablecontainer  d-flex justify-content-center m1 mt-3">
              <table class="table table-striped table-secondary table-hover m-2 ">
                <thead className="">
                  <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">Quantity</th>
                    {showColumn1 && <th>New Quantity</th>}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      {/* <td>Item {String.fromCharCode(65 + index)}</td> */}
                      <td>Item {(1 + index)}</td>
                      <td>{item} </td>
                      {showColumn1 && (
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            id={`inputType${index + 1}`}
                            value={newItems[index]}
                            onChange={(e) => {
                              const newItemsCopy = [...newItems];
                              newItemsCopy[index] = e.target.value;
                              setNewItems(newItemsCopy);
                            }}
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              class="btn btn-primary m-2 float-end"
              onClick={handleClick1}
            >
              Update
            </button>
            {showColumn1 && (
              <button
                type="button"
                class="btn btn-warning m-2 float-end"
                onClick={handleSet1}
              >
                Set values
              </button>
            )}
          </div>

        {/* type 2 */}
          <div className="badge bg-secondary w-50 p-4 m-2 mb-2 fs-5">
            <div>
              Package Type 2
              <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
                {type2Quantity}
              </span>
            </div>
            <div className="tablecontainer  d-flex justify-content-center m1 mt-3">
              <table class="table table-striped table-secondary table-hover m-2 ">
                <thead className="">
                  <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">Quantity</th>
                    {showColumn2 && <th>New Quantity</th>}
                  </tr>
                </thead>
                <tbody>
                  {items2.map((item, index) => (
                    <tr key={index}>
                      {/* <td>Item {String.fromCharCode(65 + index)}</td> */}
                      <td>Item {(1 + index)}</td>
                      <td>{item} </td>
                      {showColumn2 && (
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            id={`inputType${index + 1}`}
                            value={newItems2[index]}
                            onChange={(e) => {
                              const newItemsCopy = [...newItems2];
                              newItemsCopy[index] = e.target.value;
                              setNewItems2(newItemsCopy);
                            }}
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              class="btn btn-primary m-2 float-end"
              onClick={handleClick2}
            >
              Update
            </button>
            {showColumn2 && (
              <button
                type="button"
                class="btn btn-warning m-2 float-end"
                onClick={handleSet2}
              >
                Set values
              </button>
            )}
          </div>


          {/* type 3 */}
          <div className="badge bg-secondary w-50 p-4 m-2 mb-2 fs-5">
            <div>
              Package Type 3
              <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
                {type3Quantity}
              </span>
            </div>
            <div className="tablecontainer  d-flex justify-content-center m1 mt-3">
              <table class="table table-striped table-secondary table-hover m-2 ">
                <thead className="">
                  <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">Quantity</th>
                    {showColumn3 && <th>New Quantity</th>}
                  </tr>
                </thead>
                <tbody>
                  {items3.map((item, index) => (
                    <tr key={index}>
                      {/* <td>Item {String.fromCharCode(65 + index)}</td> */}
                      <td>Item {(1 + index)}</td>
                      <td>{item} </td>
                      {showColumn3 && (
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            id={`inputType${index + 1}`}
                            value={newItems3[index]}
                            onChange={(e) => {
                              const newItemsCopy = [...newItems3];
                              newItemsCopy[index] = e.target.value;
                              setNewItems3(newItemsCopy);
                            }}
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              class="btn btn-primary m-2 float-end"
              onClick={handleClick3}
            >
              Update
            </button>
            {showColumn3 && (
              <button
                type="button"
                class="btn btn-warning m-2 float-end"
                onClick={handleSet3}
              >
                Set values
              </button>
            )}
          </div>
          
          
          
        </div>
      </div>

      <div className="m-2 w-100 d-flex justify-content-center">
        <div className="badge bg-primary w-50 p-4 m-2 mb-2 fs-5">
            <div>
              Item Description
              
            </div>
            <div className="tablecontainer  d-flex justify-content-center m1 mt-3">
              <table class="table table-striped table-secondary table-hover m-2 ">
                <thead className="">
                  <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">Item Name</th>
                
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td scope="col">1</td>
                <td scope="col">Rice (Kg)</td>
                
             </tr>
              <tr>
                <td scope="col">2</td>
                <td scope="col">Dhal (Kg)</td>
              </tr>
              <tr>
                <td scope="col">3</td>
                <td scope="col">Cooking Oil (bottles)</td>
              </tr>
              <tr>
                <td scope="col">4</td>
                <td scope="col">Dry Foods (Packets)</td>
              </tr>
              <tr>
                <td scope="col">5</td>
                <td scope="col">Sugar (Kg)</td>

              </tr>
              <tr>
                <td scope="col">6</td>
                <td scope="col">Flour (Kg)</td>
              </tr>
              <tr>
                <td scope="col">7</td>
                <td scope="col">Milk Powder (Packets)</td>

              </tr>
              <tr>
                <td scope="col">8</td>
                <td scope="col">Biscuits (Packets)</td>

              </tr>
                </tbody>
              </table>
            </div>

    
            
          </div>

        </div>
    </React.Fragment>
  );
};

export default PackingHome;
