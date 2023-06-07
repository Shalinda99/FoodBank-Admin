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
        <th scope="col">Address</th>
        <th scope="col">Date</th>
        <th scope="col">Location</th>
      </tr>
      </thead>

      <tbody>

      <tr>
      <td> 199</td>
        <td>79, School Lane, Galle</td>
        <td>2023.06.13</td>
        <td>Galle</td>
      </tr>
    
     </tbody>
     </table>
        </React.Fragment>
     );
}
 
export default CollectionSummary;