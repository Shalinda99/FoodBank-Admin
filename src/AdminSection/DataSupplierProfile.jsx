// DataSupplierProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DataSupplierProfile = () => {
  const { id } = useParams();
  const [dsupplier, setDsupplier] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/RegisteredUser/getDataSupplier/${id}`)
      .then((response) => setDsupplier(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!dsupplier) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Data Supplier Profile</h3>
      <p>Data_Supplier_ID: {dsupplier.id}</p>
      <p>Name: {dsupplier.firstName} {dsupplier.lastName}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default DataSupplierProfile;
