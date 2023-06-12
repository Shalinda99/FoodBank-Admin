import React, { useState, useEffect } from "react";
import axios from "axios";

const UpcomingDelivery2 = () => {
  const [vdata, setVData] = useState([]);
  const [vid,setVid]=useState();
  const [deliveryPerson, setDeliveryPerson] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [victimNic, setvictimNic] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/Victim/viewToDelivery")
      .then((response) => setVData(response.data))
      .then((vdata)=>setVid(vdata.id))
      .catch((error) => console.error(error));
      console.log(vdata);
  }, []);
  

    
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/DeliveryPerson/viewDeliveryPerson")
      .then((response) => response.json())
      .then((jsondata) => setData(jsondata));
  }, []);

  const SelectMenu = () => (
    <select
      className="custom-select custom-select-lg mb-3"
      onChange={(e) => setDeliveryPerson(e.target.value)}
    >
      <option selected>Select</option>
      {data.map((item, index) => (
        <option key={index} value={item.deliveryPersonName}>
          {item.deliveryPersonName}
        </option>
      ))}
    </select>
  );

  async function handleSubmit(details) {
    const deliveryData = {
      victimNic: details.nic,

      deliveryPerson: deliveryPerson,
      deliveryNo:details.no,
      deliveryStreet: details.street,
      deliveryCity: details.city,
      deliveryDate: deliveryDate,
      isCompleted:false
      
    };
    console.log(vid);

    try {
      const response = await axios.post("http://localhost:8080/Delivery/saveDelivery", deliveryData);
    
      console.log(response.data);
      console.log(vdata)
      await axios.put(
        `http://localhost:8080/Victim/updateIsDeliveryPersonSelect/${details.id}`,
        { 
          isVerified: true ,
          isDeliveryPersonSelect:true
         }
      );
      const updatedVData = vdata.map((v) =>
        v.id === details.id ? { ...v, isDeliveryPersonSelect: true } : v
      );
      setVData(updatedVData);
    
      // Display a success message to the user
     // toast.success("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      //toast.error("An error occurred while submitting the form. Please try again later.");
    }

    // Perform any action with the deliveryData, such as sending it to an API
    console.log(deliveryData);
  }

  return (
    <React.Fragment>
      {/* Your other JSX code here */}

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Address</th>
            <th scope="col">Delivery Person</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Save</th>
          </tr>
        </thead>

        <tbody>
          {vdata.map((details) => (
            <tr key={details.id}>
              <td>{details.nic}</td>
              <td>{details.firstName} {details.lastName}</td>
              <td>{details.phoneNumber}</td>
              <td>{details.no} {details.street} {details.city}</td>
              <td><SelectMenu /></td>
              <td>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setDeliveryDate(e.target.value)}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => handleSubmit(details)}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Your other JSX code here */}
    </React.Fragment>
  );
};

export default UpcomingDelivery2;
