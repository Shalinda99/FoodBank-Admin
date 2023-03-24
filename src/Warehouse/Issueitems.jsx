import React, { useState } from 'react';
// import Button1 from "./Button1";

const IssueItems = () => {
    //validation
    const [item1,setitem1]=useState('');
    const [item2,setitem2]=useState('');
    const [item3,setitem3]=useState('');
    const [item4,setitem4]=useState('');
    const [item5,setitem5]=useState('');
    const [item6,setitem6]=useState('');
    const [item7,setitem7]=useState('');
    const [item8,setitem8]=useState('');






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
      <th scope="col">Issue Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"
      value={item1}
      onChange={(e)=>setitem1(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"
      value={item2}
      onChange={(e)=>setitem2(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"
      value={item3}
      onChange={(e)=>setitem3(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"
      value={item4}
      onChange={(e)=>setitem4(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"
      value={item5}
      onChange={(e)=>setitem5(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="number"
      value={item6}
      onChange={(e)=>setitem6(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><input type="number"
      value={item7}
      onChange={(e)=>setitem7(e.target.value)}/></td>
      
    </tr>
    <tr>
      <th scope="row">8</th>
      <td colspan="2">Larry the Bird</td>
      <td><input type="number"
      value={item8}
      onChange={(e)=>setitem8(e.target.value)}/></td>
      
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