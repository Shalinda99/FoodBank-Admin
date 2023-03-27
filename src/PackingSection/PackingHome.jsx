import React, { useState } from "react";
import "./Packing.css";

const PackingHome = () => {
  const [showColumn1, setShowColumn1] = useState(false);
  const [items, setItems] = useState([5, 2, 3, 5, 2, 8, 3, 8]);
  const [newItems, setNewItems] = useState(Array(8).fill(""));

  const handleClick = () => {
    setShowColumn1(true);
  };

  const handleSet = () => {
    setShowColumn1(false);

    setItems(items.map((item, index) => parseInt(newItems[index])));
    setNewItems(Array(8).fill(""));
  };
  return (
    <React.Fragment>
      <div className="m-2 w-100">
        <div className="types m-2 p-1 d-flex justify-content-around">
          <div className="badge bg-secondary w-50 p-4 m-2 mb-2 fs-5">
            <div>
              Package Type 1
              <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
                34
              </span>
            </div>
            <div className="tablecontainer  d-flex justify-content-center m1 mt-3">
              <table class="table table-striped table-secondary table-hover m-2 ">
                <thead className="">
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    {showColumn1 && <th>New Qunatity</th>}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      {/* <td>Item {String.fromCharCode(65 + index)}</td> */}
                      <td>Item {(1 + index)}</td>
                      <td>{item} Kg</td>
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
              onClick={handleClick}
            >
              Update
            </button>
            {showColumn1 && (
              <button
                type="button"
                class="btn btn-warning m-2 float-end"
                onClick={handleSet}
              >
                Set values
              </button>
            )}
          </div>
          <div className="badge bg-secondary w-50 p-4 m-2 fs-5">
            Type 2{" "}
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">9</span>
          </div>
          <div className="badge bg-secondary w-50 p-4 m-2 fs-5">
            Type 3{" "}
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">25</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PackingHome;
