import React from 'react';
// import Button1 from "./Button1";

const IssueItems = () => {
    return ( 
        <React.Fragment>
            <h1>Issue Items</h1>
            <div className=' d-flex justify-content-center '>
                <div className='w-75'>
            <table class="table table-striped m-2 table-secondary">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Item Id</th>
      <th scope="col">Item name</th>
      <th scope="col">Current Storage</th>
      <th scope="col">Issue Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>jhbh</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@hbdbo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>jhdgfr</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{/* <div class="d-flex justify-content-end align-items-end ">
  <div class="align-self-end ml-10 "> 
    <Button1 variant="secondary" bg="grey" text="Next" textColor="dark" page="/Issueitems" />
  </div>
</div> */}
        </React.Fragment>
     );
}
 
export default IssueItems;