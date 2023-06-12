import React,{useState,useEffect} from 'react';
import axios from "axios";

const FoodDonation = () => {

  const [data, setData] = useState([]);
  const [xdata,setxData]=useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:8080/FoodDonate/pending'); 
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   };

  //   fetchData();
  // }, []);

  // async function handleReceivable(details) {
  //   const response = await fetch(
  //     "http://localhost:8080/FoodDonate/collected/${details.donationId}",
  //     {
  //       method: 'PUT',
  //       body: JSON.stringify({ isCollected: true }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );

  //   if (response.ok) {
  //     const updatedData = data.map((item) =>
  //       item.donationId === details.donationId
  //         ? { ...item, isCollected: true }
  //         : item
  //     );
  //     setData(updatedData);
  //   }
  // }
  useEffect(() => {
    axios
      .get("http://localhost:8080/FoodDonate/pending")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
      console.log(data);
      
  }, []);
  

  async function handleIsCollected(details) {
    console.log(details);
  
    try {
      await axios.put(
        `http://localhost:8080/FoodDonate/collected/${details.donationId}`,
        {
          isCollected: true
        }
      );
    } catch (error) {
      console.error(error);
    }
  }



  async function handleAvailability(details) {
   
      console.log(details);
  
      try {
        await axios.put(
          `http://localhost:8080/FoodDonate/pending/${details.donationId}`,
          {
            isNotAvailable: true
          }
        );
      } catch (error) {
        console.error(error);
      }
    //   `http://localhost:8080/FoodDonate/pending/${details.donationId}`,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify({ isNotAvailable: true }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );

    // if (response.ok) {
    //   const updatedData = data.map((item) =>
    //     item.donationId === details.donationId
    //       ? { ...item, isNotAvailable: true }
    //       : item
    //   );
    //   setData(updatedData);
    // }
  }

    return ( 
        <React.Fragment>

<div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Food Donation Status</div>
      </div>

      
       <table class="table table-striped mt-3">
      <thead>
      <tr>
      <th scope="col">ID</th>
        <th scope="col">Address</th>
        <th scope="col">Date</th>
        <th scope="col">Location</th>
        <th scope="col">Option</th>
        <th scope="col">Status</th>
      </tr>
      </thead>

      <tbody>

      {/* <tr>
        <td> 199</td>
        <td>79, School Lane, Galle</td>
        <td>2023.06.13</td>
        <td>Galle</td>
        <td > <div className="d-flex justify-content-start">
            <button className='btn btn-warning me-3'>Collected</button>
            <button className='btn btn-danger'>Not-available</button>
            </div> </td>
      </tr> */}

      {data.map((details)=>(
        (
          <tr >
            <td>{details.donationId}</td>
          <td> {details.donationAddress}</td>
          <td>{details.donationDate}</td>
          <td>{details.nearestLocation}</td>
          <td>{details.selectedOption}</td>
          <td > <div className="d-flex justify-content-start">
          <button className='btn btn-warning me-3' onClick={() => handleIsCollected(details)}>Collected</button>
<button className='btn btn-danger' onClick={() => handleAvailability(details)}>Not-available</button>

              </div> </td>
        </tr>
        )
      ))}
    
     </tbody>
     </table>
            
        </React.Fragment>
     );
};
 
export default FoodDonation;