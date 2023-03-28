import React, { useState, useEffect } from "react";
import "./Packing.css";
import axios from "axios";

const PackageIsues = () => {
  const [type1Quantity, setType1Quantity] = useState(34);
  const [type2Quantity, setType2Quantity] = useState(9);
  const [type3Quantity, setType3Quantity] = useState(25);

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // axios
    //   .get("/api/data")
    //   .then((response) => {
    //     setType1Quantity(response.data.type1Quantity);
    //     setType2Quantity(response.data.type2Quantity);
    //     setType3Quantity(response.data.type3Quantity);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    axios.get("http://localhost:8080/packedPackages/viewPackedPackages")            // for the summary table
    .then((response) => setTableData(response.data))
    .catch((error) => console.log(error));
  }, []);
  // [] indicates  it should only run once, when the component is first mounted

  const [type1ReQuantity, setType1Requantity] = useState(6);
  const [type2ReQuantity, setType2Requantity] = useState(7);
  const [type3ReQuantity, setType3Requantity] = useState(19);

  const [type1IssueQuantity, setType1Issuequantity] = useState(type1ReQuantity);
  const [type2IssueQuantity, setType2Issuequantity] = useState(type2ReQuantity);
  const [type3IssueQuantity, setType3Issuequantity] = useState(type3ReQuantity);
  const [issueDate, setIssueDate] = useState("");

  const [error, setError] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validateInputs();

    setType1Quantity(type1Quantity - parseInt(type1IssueQuantity));
    setType2Quantity(type2Quantity - parseInt(type2IssueQuantity));
    setType3Quantity(type3Quantity - parseInt(type3IssueQuantity));

    if (Object.keys(errors).length === 0) {
      // submit form
      const issuingData1 = {
        packageTypeName: "Type 1",
        issuedQuantity: type1IssueQuantity,
        issuedDate: issueDate,
        packageType: {
          typeID: 101,
          typeName: "Type 1",
          quantity: type1Quantity,
        },
      };

      const issuingData2 = {
        packageTypeName: "Type 2",
        issuedQuantity: type2IssueQuantity,
        issuedDate: issueDate,
        packageType: {
          typeID: 102,
          typeName: "Type 2",
          quantity: type2Quantity,
        },
      };

      const issuingData3 = {
        packageTypeName: "Type 3",
        issuedQuantity: type3IssueQuantity,
        issuedDate: issueDate,
        packageType: {
          typeID: 103,
          typeName: "Type 3",
          quantity: type3Quantity,
        },
      };

      try {
        const issuingData = [issuingData1, issuingData2, issuingData3];
        for (const data of issuingData) {
          const response = await axios.post(
            "http://localhost:8080/issuedPackages/saveICount",
            data
          );
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
      //set requisition
      setType1Requantity(type1ReQuantity - parseInt(type1IssueQuantity));
      setType2Requantity(type2ReQuantity - parseInt(type2IssueQuantity));
      setType3Requantity(type3ReQuantity - parseInt(type3IssueQuantity));

      //  event.target.reset();
      // Update state of total quantity
      //   setType1quantity(type1Quantity + parseInt(type1AddQuantity));
      //   setType2quantity(type2Quantity + parseInt(type2AddQuantity));
      //   setType3quantity(type3Quantity + parseInt(type3AddQuantity));

      // Reset input fields
      setType1Issuequantity(0);
      setType2Issuequantity(0);
      setType3Issuequantity(0);
      setIssueDate("");

      setError("");
      console.log("Form submitted successfully!");
    } else {
      setError(errors);
    }
  }

  function validateInputs() {
    // Validate inputs
    const errors = [];
    if (
      !type1IssueQuantity ||
      isNaN(type1IssueQuantity) ||
      type1IssueQuantity < 0
    ) {
      // is not a number isNaN
      errors.type1IssueQuantity = "* Invalid quantity for type 1 package";
    }
    if (
      !type2IssueQuantity ||
      isNaN(type2IssueQuantity) ||
      type2IssueQuantity < 0
    ) {
      errors.type2IssueQuantity = "* Invalid quantity for type 2 package";
    }
    if (
      !type3IssueQuantity ||
      isNaN(type3IssueQuantity) ||
      type3IssueQuantity < 0
    ) {
      errors.type3IssueQuantity = "* Invalid quantity for type 3 package";
    }
    if (issueDate.trim() === "") {
      errors.issueDate = "* Issuing Date is required";
    }
    return errors;
  }

  function handleReset(event) {
    event.preventDefault();
    // Reset input fields
    setType1Issuequantity("");
    setType2Issuequantity("");
    setType3Issuequantity("");
    setIssueDate("");
  }

  return (
    <React.Fragment>
      <h2>Issue packages</h2>
      <p>Enter details about issued packages</p>

      <div className="mmcontain d-flex mb-4 w-100">
        <div className="sidecontent w-25  d-flex flex-column d-flex justify-content-center align-items-center mb-5">
          <h3>Requsition</h3>
          <div className="badge bg-secondary w-75 p-4 m-2 fs-5">
            Type 1
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
              {type1ReQuantity}
            </span>
          </div>
          <div className="badge bg-secondary w-75 p-4 m-2 fs-5">
            Type 2{" "}
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
              {type2ReQuantity}
            </span>
          </div>
          <div className="badge bg-secondary w-75 p-4 m-2 fs-5">
            Type 3{" "}
            <span className="badge bg-light text-dark ps-3 pe-3 ms-1">
              {type3ReQuantity}
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
                    value={type1IssueQuantity}
                    onChange={(e) =>
                      setType1Issuequantity(parseInt(e.target.value))
                    }
                  />
                  {error.type1IssueQuantity && (
                    <span className="error">{error.type1IssueQuantity}</span>
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
                    value={type2IssueQuantity}
                    onChange={(e) =>
                      setType2Issuequantity(parseInt(e.target.value))
                    }
                  />
                  {error.type2IssueQuantity && (
                    <span className="error">{error.type2IssueQuantity}</span>
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
                    value={type3IssueQuantity}
                    onChange={(e) =>
                      setType3Issuequantity(parseInt(e.target.value))
                    }
                  />
                  {error.type3IssueQuantity && (
                    <span className="error">{error.type3IssueQuantity}</span>
                  )}
                </div>

                <div class="col-md-4">
                  <label for="inputDate" class="form-label">
                    Issuing Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputDate"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                  />
                  {error.issueDate && (
                    <span className="error">{error.issueDate}</span>
                  )}
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary me-2">
                    Issue Packages
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

      <h2>Package Issues Summary</h2>
      <p>Most recent issues to delivery collection can be viewd here</p>

      <div className="tablecontainer  d-flex justify-content-center">
        <table class="table table-striped table-secondary table-hover m-2 ">
          <thead className="">
            <tr>
              <th scope="col"></th>
              <th scope="col">Package Type</th>
              <th scope="col">Isuued Quantity</th>
              <th scope="col">Date issued</th>
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
                        {rowData.issuedID}
                    </th>
                    <td>{rowData.packageTypeName}</td>
                    <td>{rowData.issuedQuantity}</td>
                    <td className="align-middle">{rowData.issuedDate}</td>
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

export default PackageIsues;
