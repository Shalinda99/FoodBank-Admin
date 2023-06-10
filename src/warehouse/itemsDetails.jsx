import React from "react";
import { useEffect, useState } from "react";

const ItemDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/ItemDetails/viewAllItems")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
          <table class="table table-striped m-2 table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                <th scope="col">Current Storage</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (item) => (
                  console.log(item.name),
                  (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetails;
