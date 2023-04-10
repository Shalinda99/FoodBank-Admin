import React,{useState} from 'react';
import ToggleButton from './ToggleButton';

const FoodDonation = () => {

    return ( 
        <React.Fragment>

<div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Food Donation Status</div>
      </div>

      
       <table class="table table-striped mt-3">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Location</th>
        <th scope="col">Date</th>
        <th scope="col">Address</th>
        <th scope="col">Status</th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td> 199556500987</td>
        <td>Kamal Perera</td>
        <td>072367542</td>
        <td>79, School Lane, Galle</td>
        <td > <div className="d-flex justify-content-start">
            <button className='btn btn-warning me-3'>Collected</button>
            <button className='btn btn-danger'>Not-available</button>
            </div> </td>
      </tr>
    
     </tbody>
     </table>
            
        </React.Fragment>
     );
}
 
export default FoodDonation;