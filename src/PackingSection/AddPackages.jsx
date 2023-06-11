import React, { useState,useEffect } from "react";
import "./Packing.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPackages = () => {
  const [type1Quantity, setType1quantity] = useState(0);
  const [type2Quantity, setType2quantity] = useState(0);
  const [type3Quantity, setType3quantity] = useState(0);
  const [packedDate, setPackedDate] = useState("");

  const [type1AddQuantity, setType1Addquantity] = useState(0);
  const [type2AddQuantity, setType2Addquantity] = useState(0);
  const [type3AddQuantity, setType3Addquantity] = useState(0);
  // when a array is used, it doesn't render because of onchange

  //use effect
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/packedPackages/viewPackedPackages")
      .then((response) => {
        setTableData(response.data);

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
  
  const [error, setError] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validateInputs();

          //  event.target.reset();


if (Object.keys(errors).length === 0) {

      
   
// console.log("type1AddQuantity:", type1AddQuantity);
// console.log("type2AddQuantity:", type2AddQuantity);
// console.log("type3AddQuantity:", type3AddQuantity);
// console.log("type1Quantity:", type1Quantity);
// console.log("type2Quantity:", type2Quantity);
// console.log("type3Quantity:", type3Quantity);

  // submit form
  const packingData1 = 
    { 
      packageTypeName: "Type 1", 
      packedQuantity: type1AddQuantity,
      packedDate: packedDate,
      packageType:{
        typeID:101,
        typeName:"Type 1",
        quantity: type1Quantity
      }
     };

     const packingData2 = 
     { 
      packageTypeName: "Type 2", 
          packedQuantity: type2AddQuantity,
          packedDate: packedDate,
          packageType:{
            typeID:102,
            typeName:"Type 2",
            quantity: type2Quantity
          } 
      };

      const packingData3 = 
      { 
            packageTypeName: "Type 3", 
            packedQuantity: type3AddQuantity,
            packedDate: packedDate,
            packageType:{
              typeID:103,
              typeName:"Type 3",
              quantity: type3Quantity
            } 
       };


  // const data = {
  //   packedDate: packedDate,
  //   packingData: packingData,
  // };

  try {
    const packingData = [packingData1, packingData2, packingData3];
    for (const data of packingData) {
      const response = await axios.post("http://localhost:8080/packedPackages/saveCount", data);
      console.log(response.data);
      toast.success("Submitted successfully!");
                // Update state
                setType1quantity(type1Quantity + type1AddQuantity);
                setType2quantity(type2Quantity + type2AddQuantity);
                setType3quantity(type3Quantity + type3AddQuantity);
       
    }
  } catch (error) {
    toast.warning("An error occurred while submitting. Please try again later.");
    console.error(error);
  }

  try {
    const type1ID = 101; 
    const type1NewQuantity = type1Quantity; 
    console.log(type1NewQuantity);
  
    const type2ID = 102; 
    const type2NewQuantity = type2Quantity; 
  
    const type3ID = 103; 
    const type3NewQuantity = type3Quantity; 
  
    // Update the first package type
    await axios.put(`http://localhost:8080/packageTypes/${type1ID}/quantity`, {
      newQuantity: type1NewQuantity,
    });
  
    // Update the second package type
    await axios.put(`http://localhost:8080/packageTypes/${type2ID}/quantity`, {
      newQuantity: type2NewQuantity,
    });
  
    // Update the third package type
    await axios.put(`http://localhost:8080/packageTypes/${type3ID}/quantity`, {
      newQuantity: type3NewQuantity,
    });
  
    toast.success("Quantities updated successfully!");
  

  } catch (error) {
    // toast.error("An error occurred while updating the quantities. Please try again later.");
    console.error(error);
  }
  
  

      // Reset input fields
      setType1Addquantity(0);
      setType2Addquantity(0);
      setType3Addquantity(0);
      setPackedDate("");

      setError("");
     // console.log("Form submitted successfully!");
    } else {
      setError(errors);
    }
  }

  function validateInputs() {
    // Validate inputs
    const errors = [];
    if (!type1AddQuantity || isNaN(type1AddQuantity) || type1AddQuantity < 0) {
      // is not a number isNaN
      errors.type1AddQuantity = "* Invalid quantity for type 1 package";
    }
    if (!type2AddQuantity || isNaN(type2AddQuantity) || type2AddQuantity < 0) {
      errors.type2AddQuantity = "* Invalid quantity for type 2 package";
    }
    if (!type3AddQuantity || isNaN(type3AddQuantity) || type3AddQuantity < 0) {
      errors.type3AddQuantity = "* Invalid quantity for type 3 package";
    }
    if (packedDate.trim() === "") {
      errors.packedDate = "* Packed Date is required";
    }
    return errors;
  }

  function handleReset(event) {
    event.preventDefault();
    // Reset input fields
    setType1Addquantity(0);
    setType2Addquantity(0);
    setType3Addquantity(0);
    setPackedDate("");
  }

  return (
    <React.Fragment>
          <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
/>
      <h2>Add packages</h2>
      <p>Enter details about packed items</p>

      <div className="mmcontain d-flex mb-4">
        <div className="sidecontent w-25 d-flex flex-column d-flex justify-content-center align-items-center mb-5">
          <h3>Current Storage</h3>
          <div className="badge bg-secondary w-75 p-4 m-2 fs-5">
            Type 1
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
              {type1Quantity}
            </span>
          </div>
          <div className="badge bg-secondary w-75 p-4 m-2 fs-5">
            Type 2{" "}
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
              {type2Quantity}
            </span>
          </div>
          <div className="badge bg-secondary w-75 p-4 m-2 fs-5">
            Type 3{" "}
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
              {type3Quantity}
            </span>
          </div>
        </div>
        <div className="mcontain w-75 mb-5">
          <div class="container bg-light m-2 rounded ">
            <div className="bg-secondary text-center p-1 mb-2 rounded ">
              <h3 className="text-white">Add package Details</h3>
            </div>
            <div className="content d-flex">
              <form class="row g-4 m-2" onSubmit={handleSubmit}>
                
                <div class="col-md-4">
                  <label for="inputType1" class="form-label">
                    Package Type 1
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputType1"
                    value={type1AddQuantity}
                    onChange={(e) => setType1Addquantity(parseInt(e.target.value))}
                  />
                  {error.type1AddQuantity && (
                    <span className="error">{error.type1AddQuantity}</span>
                  )}
                </div>

                <div class="col-md-4">
                  <label for="inputType2" class="form-label">
                    Package Type 2
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputType2"
                    value={type2AddQuantity}
                    onChange={(e) => setType2Addquantity(parseInt(e.target.value))}
                  />
                  {error.type2AddQuantity && (
                    <span className="error">{error.type2AddQuantity}</span>
                  )}
                </div>

                <div class="col-md-4">
                  <label for="inputType2" class="form-label">
                    Package Type 3
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputType2"
                    value={type3AddQuantity}
                    onChange={(e) => setType3Addquantity(parseInt(e.target.value))}
                  />
                  {error.type3AddQuantity && (
                    <span className="error">{error.type3AddQuantity}</span>
                  )}
                </div>

                <div class="col-md-4">
                  <label for="inputDate" class="form-label">
                    Packed Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputDate"
                    value={packedDate}
                    onChange={(e) => setPackedDate(e.target.value)}
                  />
                  {error.packedDate && (
                    <span className="error">{error.packedDate}</span>
                  )}
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary me-2">
                    Add Packages
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2>Package Adding Summary</h2>
      <p>Most recent updates to package collection can be viewd here</p>

      <div className="tablecontainer  d-flex justify-content-center">
        <table class="table table-striped table-secondary table-hover m-2 ">
          <thead className="">
            <tr>
              <th scope="col"></th>
              <th scope="col">Package Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="align-middle;">
                1
              </th>
              <td>Type 1</td>
              <td>12</td>
              <td className="align-middle;">
                2023-03-12
              </td>
            </tr>
            <tr>
            <th scope="row" className="align-middle;">
                2
              </th>
              <td>Type 2</td>
              <td>13</td>
              <td className="align-middle;">
                2023-03-12
              </td>
            </tr>
            <tr>
            <th scope="row" className="align-middle;">
                3
              </th>
              <td>Type 3</td>
              <td>32</td>
              <td className="align-middle;">
                2023-03-12
              </td>
            </tr>

            {tableData.map((rowData, index) => (
          <><tr key={index}>
                    <th scope="row" className="align-middle" >
                        {rowData.packedID}
                    </th>
                    <td>{rowData.packageTypeName}</td>
                    <td>{rowData.packedQuantity}</td>
                    <td className="align-middle">{rowData.packedDate}</td>
                </tr>
                {/* <tr>
                        <td>{rowData.packageTypeNam}</td>
                        <td>{rowData.packedQuantit}</td>
                    </tr>
                    <tr>
                        <td>{rowData.packageTypeNam}</td>
                        <td>{rowData.packedQuantit}</td>
                    </tr> */}
                    </>
        ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default AddPackages;
