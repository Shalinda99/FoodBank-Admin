import React from 'react';

const CollectionSummary = () => {
    return ( 
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-center">
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Received Food Donations</div>
      </div>

      
       <table class="table table-striped mt-3">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Location</th>
        <th scope="col">Date</th>
        <th scope="col">Address</th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td> 199556500987</td>
        <td>Kamal Perera</td>
        <td>072367542</td>
        <td>79, School Lane, Galle</td>
      </tr>
    
     </tbody>
     </table>
        </React.Fragment>
     );
}
 
export default CollectionSummary;