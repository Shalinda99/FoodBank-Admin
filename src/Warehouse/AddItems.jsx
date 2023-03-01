import React from 'react';

const AddItems = () => {
    return ( 
        <React.Fragment>
            <h1>Add Items</h1>
            <div className=' d-flex justify-content-center '>
                <div className='w-75'>
            <table class="table table-striped m-2 table-secondary">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Item Id</th>
      <th scope="col">Item name</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><input type="number"/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td><input type="number"/></td>
    </tr>
  </tbody>
</table>
</div>
</div>
        </React.Fragment>
     );
}
 
export default AddItems;