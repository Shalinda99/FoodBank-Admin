// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";

const IssueItems = (props) => {

  const [item1,setItem1]=useState(0);
  const [item2,setItem2]=useState(0);
  const [item3,setItem3]=useState(0);
  const [item4,setItem4]=useState(0);
  const [item5,setItem5]=useState(0);
  const [item6,setItem6]=useState(0);
  const [item7,setItem7]=useState(0);
  const [item8,setItem8]=useState(0);

  const [date,setDate]=useState("");

  const [itemAdd1,setItemAdd1]=useState(0);
  const [itemAdd2,setItemAdd2]=useState(0);
  const [itemAdd3,setItemAdd3]=useState(0);
  const [itemAdd4,setItemAdd4]=useState(0);
  const [itemAdd5,setItemAdd5]=useState(0);
  const [itemAdd6,setItemAdd6]=useState(0);
  const [itemAdd7,setItemAdd7]=useState(0);
  const [itemAdd8,setItemAdd8]=useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/packedPackages/viewPackedPackages")
      .then((response) => {
        

        
        axios
          .get("http://localhost:8080/ItemDetails/quantity/1")
          .then((quantityResponse) => setItem1(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/2")
          .then((quantityResponse) => setItem2(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/3")
          .then((quantityResponse) => setItem3(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/4")
          .then((quantityResponse) => setItem4(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/5")
          .then((quantityResponse) => setItem5(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/6")
          .then((quantityResponse) => setItem6(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/7")
          .then((quantityResponse) => setItem7(quantityResponse.data))
          .catch((error) => console.log(error));

          axios
          .get("http://localhost:8080/ItemDetails/quantity/8")
          .then((quantityResponse) => setItem8(quantityResponse.data))
          .catch((error) => console.log(error));

        
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSaveButtonClick = async () => {
    setItem1(item1 - itemAdd1);
    setItem2(item2 - itemAdd2);
    setItem3(item3 - itemAdd3);
    setItem4(item4 - itemAdd4);
    setItem5(item5 - itemAdd5);
    setItem6(item6 - itemAdd6);
    setItem7(item7 - itemAdd7);
    setItem8(item8 - itemAdd8);

    try {
      const type1ID = 1; 
      const type1NewQuantity = item1; 
      console.log(type1NewQuantity);

      const type2ID = 2; 
      const type2NewQuantity = item2;

      const type3ID = 3; 
      const type3NewQuantity = item3; 

      const type4ID = 4; 
      const type4NewQuantity = item4;

      const type5ID = 5; 
      const type5NewQuantity = item5; 

      const type6ID = 6; 
      const type6NewQuantity = item6;

      const type7ID = 7; 
      const type7NewQuantity = item7; 

      const type8ID = 8; 
      const type8NewQuantity = item8;
    
    
      // Update the first  type
      await axios.put(`http://localhost:8080/ItemDetails/${type1ID}/quantity`, {
        newQuantity: type1NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type2ID}/quantity`, {
        newQuantity: type2NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type3ID}/quantity`, {
        newQuantity: type3NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type4ID}/quantity`, {
        newQuantity: type4NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type5ID}/quantity`, {
        newQuantity: type5NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type6ID}/quantity`, {
        newQuantity: type6NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type7ID}/quantity`, {
        newQuantity: type7NewQuantity,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${type8ID}/quantity`, {
        newQuantity: type8NewQuantity,
      });


    

    
      //toast.success("Quantities updated successfully!");
    
  
    } catch (error) {
      // toast.error("An error occurred while updating the quantities. Please try again later.");
      console.error(error);
    }
    
  };

  

  return (
    <React.Fragment>
      {/* <h1>{item1}</h1> */}
      <h1>Issue Items</h1>
      <div className=" d-flex justify-content-center ">
        <div className="w-75">
        <table class="table table-striped  table-secondary">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item name</th>
                <th scope="col">Issue Quantity</th>
                <th>Total Quantity</th>

            
              </tr>
              <tr>
                <td scope="col">1</td>
                <td scope="col">Rice (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd1}
                onChange={(e)=>setItemAdd1(parseInt(e.target.value))}
                /> </td>
                <td>{item1}</td>
            
              </tr>
              <tr>
                <td scope="col">2</td>
                <td scope="col">Dhal (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd2}
                onChange={(e)=>setItemAdd2(parseInt(e.target.value))}
                /> </td>
                 <td>{item2}</td>
            
              </tr>
              <tr>
                <td scope="col">3</td>
                <td scope="col">Cooking Oil (bottles)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd3}
                onChange={(e)=>setItemAdd3(parseInt(e.target.value))}
                /> </td>
                 <td>{item3}</td>
            
              </tr>
              <tr>
                <td scope="col">4</td>
                <td scope="col">Dry Foods (Packets)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd4}
                onChange={(e)=>setItemAdd4(parseInt(e.target.value))}
                /> </td>
                 <td>{item4}</td>
            
              </tr>
              <tr>
                <td scope="col">5</td>
                <td scope="col">Sugar (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd5}
                onChange={(e)=>setItemAdd5(parseInt(e.target.value))}
                /> </td>
                 <td>{item5}</td>
            
              </tr>
              <tr>
                <td scope="col">6</td>
                <td scope="col">Flour (Kg)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd6}
                onChange={(e)=>setItemAdd6(parseInt(e.target.value))}
                /> </td>
                 <td>{item6}</td>
            
              </tr>
              <tr>
                <td scope="col">7</td>
                <td scope="col">Milk Powder (Packets)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd7}
                onChange={(e)=>setItemAdd7(parseInt(e.target.value))}
                /> </td>
                 <td>{item7}</td>
            
              </tr>
              <tr>
                <td scope="col">8</td>
                <td scope="col">Biscuits (Packets)</td>
                <td scope="col"><input type="number" className="form-control" value={itemAdd8}
                onChange={(e)=>setItemAdd8(parseInt(e.target.value))}
                /> </td>
                 <td>{item8}</td>
            
              </tr>

              <tr>
                <td></td>
                <td ></td>
               
                <td scope="col" colSpan={2}>  <button type="submit" class="btn btn-warning me-2 w-100"  onClick={handleSaveButtonClick}>
                   save
                  </button></td>
                  
            
              </tr>
            </thead>
         
          </table>
          
        </div>
      </div>

   
    </React.Fragment>
  );

}
 
export default IssueItems;