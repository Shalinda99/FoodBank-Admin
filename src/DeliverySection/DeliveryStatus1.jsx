import React, { useState, useEffect } from "react";
// import ToggleSwitch from "./ToggleButton";
import axios from "axios";

const DeliveryStatus1 = () => {
  const [vdata, setVData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/Delivery/getIncompleteDeliveries");
  //       setVData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Delivery/getIncompleteDeliveries")
      .then((response) => setVData(response.data))
      .catch((error) => console.error(error));
      console.log(vdata);
  }, []);

  async function handleSwitchChange(details) {
    console.log(details);
  
    try {
      await axios.put(
        `http://localhost:8080/Delivery/updateDeliveryStatus/${details.did}`,
        {
          isCompleted: true
        }
      );
  
      // Fetch updated data
      // const response = await axios.get("http://localhost:8080/Delivery/getIncompleteDeliveries");
      // setVData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // const handleSwitchChange = async (id) => {
  //   setIsSwitchOn(!isSwitchOn);
  //   const response = await fetch(`http://localhost:8080/Delivery/updateDeliveryStatus/{deliveryId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       isCompleted: true
  //     })
  //   });
  
  //   if (response.ok) {
  //     // handle success response
  //     console.log('Victim updated successfully');
  //   } else {
  //     // handle error response
  //     console.error('Error updating victim');
  //   }
  // };

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>Delivery Status</div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Delivery Person</th>
            <th scope="col">Date</th>
            <th scope="col">Address</th>
            <th scope="col">Delivery Status</th>
          </tr>
        </thead>

        <tbody>
          {vdata.map((details) => (
            <tr key={details.did}>
              <td>{details.victimNic}</td>
              <td>{details.deliveryPerson}</td>
              <td>{details.deliveryDate}</td>
              <td>{details.deliveryNo} {details.deliveryStreet} {details.deliveryCity}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => handleSwitchChange(details)}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </React.Fragment>
  );
};

export default DeliveryStatus1;
