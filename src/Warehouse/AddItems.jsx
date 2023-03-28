import React, { useState, useEffect } from "react";
import axios from "axios";

const AddItems = () => {
  const [values, setValues] = useState([]);
  const [itemData, setItemData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "http://localhost:8080/ItemDetails/viewAllItems"
  //     );
  //     const jsonData = await response.json();
  //     setItemData(jsonData);
  //     setValues(new Array(itemData.length).fill(''));
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch("http://localhost:8080/ItemDetails/viewAllItems")
      .then((response) => response.json())
      .then((data) => {
        setItemData(data);
        const newValues = {};
        itemData.forEach((item) => {
          newValues[item.id] = "";
        });
        setValues(newValues);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleInputChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here is where you would send the values to the backend using the Fetch API
    fetch("https://my-backend.com/my-endpoint", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Handle the response from the backend here
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <React.Fragment>
      <h1>Add Items</h1>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
          <table class="table table-striped m-2 table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                <th scope="col">Add Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td> */}
              {itemData.map((details) => (
                <tr key={details.id}>
                  <td> {details.id}</td>
                  <td>{details.name}</td>
                  <td>
                    <input
                      type="number"
                      value={values[details.id]}
                      onChange={(event) => handleInputChange(details.id, event)}
                    />
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
        <button
          className="btn btn-primary"
          style={{ width: "150px" }}
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddItems;
