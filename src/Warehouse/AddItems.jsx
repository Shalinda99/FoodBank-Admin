import React, { useState, useEffect } from "react";
import axios from "axios";

const AddItems = () => {
  const [values, setValues] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [inputValues, setInputValues] = useState([]);

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

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  
  const handleSaveButtonClick = () => {
    const itemsWithInputValues = itemData.map((item, index) => ({
      ...item,
      inputValue: inputValues[index]
    }));
    
    console.log(itemsWithInputValues)
    // fetch("http://localhost:8080/ItemDetails/saveIssued", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ itemsWithInputValues }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };


  

  return (
    <React.Fragment>
      <h1>Add Items</h1>
      <div className=" d-flex justify-content-center ">
        <div className="d-flex w-50" >
          <table class="table table-striped  table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                {/* <th scope="col">Add Amount</th> */}
              </tr>
            </thead>
            <tbody>
              {itemData.map((details) => (
                <tr key={details.id}>
                  <td> {details.id}</td>
                  <td>{details.name}</td>
                  {/* <td>
                    <input
                      type="number"
                      value={values[details.id]}
                      onChange={(event) => handleInputChange(details.id, event)}
                    />
                    
                  </td> */}
                </tr>
                
              ))}
                </tbody>
          </table>

              <table class="table table-striped mt-3 table-secondary">
                  <thead>
                  <th scope="col " className="bg-light"> Quantity</th>
                  </thead>
                  <tbody>
                  {Array.from({ length: itemData.length }, (_, index) => (
                <tr>
                  <td>
                  <input
    type="number"
    value={inputValues[index] || ""}
    onChange={(event) => handleInputChange(event, index)}
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
          onClick={handleSaveButtonClick}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddItems;
