// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";

const IssueItems = () => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/ItemDetails/viewAllItems"
      );
      const jsonData = await response.json();
      setItemData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1>Issue Items</h1>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
          <table class="table table-striped m-2 table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                <th scope="col">Issue Amount</th>
              </tr>
            </thead>
            <tbody>
              {itemData.map((details) => (
                <tr key={details.id}>
                  <td> {details.id}</td>
                  <td>{details.name}</td>
                  <td>
                    <input type="number" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="position-fixed bottom-1 end-0 p-3"></div>
      <div
        className="position-fixed bottom-2 end-0 p-3 mb-5 mt-5"
        style={{ zIndex: "11" }}
      >
        <input type="date" className="me-3 p-1" />
        <button className="btn btn-primary" style={{ width: "150px" }}>
          Save
        </button>
      </div>
    </React.Fragment>
  );

}
 
export default IssueItems;