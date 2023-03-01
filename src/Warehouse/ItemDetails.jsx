import React from 'react';

const ItemDetails = () => {
    return ( 
        <React.Fragment>
            <h1>Item Details</h1>
            <div className=' d-flex justify-content-center '>
                <div className='w-75'>
            <table class="table table-striped m-2 table-secondary">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Item Id</th>
      <th scope="col">Item name</th>
      <th scope="col">Current Storage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</div>
        </React.Fragment>
     );
}
 
export default ItemDetails;