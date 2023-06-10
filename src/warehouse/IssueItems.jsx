// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";

const IssueItems = () => {

  const [item1,setItem1]=useState(0);
  const [item2,setItem2]=useState(0);
  const [item3,setItem3]=useState(0);
  const [item4,setItem4]=useState(0);
  const [item5,setItem5]=useState(0);
  const [item6,setItem6]=useState(0);
  const [item7,setItem7]=useState(0);
  const [item8,setItem8]=useState(0);

  const [itemAdd1,setItemAdd1]=useState(0);
  const [itemAdd2,setItemAdd2]=useState(0);
  const [itemAdd3,setItemAdd3]=useState(0);
  const [itemAdd4,setItemAdd4]=useState(0);
  const [itemAdd5,setItemAdd5]=useState(0);
  const [itemAdd6,setItemAdd6]=useState(0);
  const [itemAdd7,setItemAdd7]=useState(0);
  const [itemAdd8,setItemAdd8]=useState(0);
  

  return (
    <React.Fragment>
      <h1>Issue Items</h1>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
        <table class="table table-striped  table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                <th scope="col">Quantity</th>
            
              </tr>
              <tr>
                <td scope="col">1</td>
                <td scope="col">Rice (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd1}
                onChange={(e)=>setItemAdd1(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">2</td>
                <td scope="col">Dhal (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd2}
                onChange={(e)=>setItemAdd2(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">3</td>
                <td scope="col">Cooking Oil (bottles)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd3}
                onChange={(e)=>setItemAdd3(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">4</td>
                <td scope="col">Dry Foods (Packets)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd4}
                onChange={(e)=>setItemAdd4(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">5</td>
                <td scope="col">Sugar (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd5}
                onChange={(e)=>setItemAdd5(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">6</td>
                <td scope="col">Flour (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd6}
                onChange={(e)=>setItemAdd6(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">7</td>
                <td scope="col">Milk Powder (Packets)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd7}
                onChange={(e)=>setItemAdd7(parseInt(e.target.value))}
                /> </td>
            
              </tr>
              <tr>
                <td scope="col">8</td>
                <td scope="col">Biscuits (Packets)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd8}
                onChange={(e)=>setItemAdd8(parseInt(e.target.value))}
                /> </td>
            
              </tr>
            </thead>
            <tbody>

                </tbody>
          </table>
          
        </div>
      </div>

      <div className="position-fixed bottom-1 end-0 p-3"></div>
      <div
        className="position-fixed bottom-2 end-0 p-3 mb-5 mt-5"
        style={{ zIndex: "11" }}
      >
        <input type="date" className="me-3 p-1" />
        <button className="btn btn-primary" style={{ width: "150px" }}>
          Save
        </button>
      </div>
    </React.Fragment>
  );

}
 
export default IssueItems;