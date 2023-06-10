import React, { useState, useEffect } from "react";
import axios from "axios";

const AddItems = () => {
  const [item1,setItem1]=useState(0);
  const [item2,setItem2]=useState(0);
  const [item3,setItem3]=useState(0);
  const [item4,setItem4]=useState(0);
  const [item5,setItem5]=useState(0);
  const [item6,setItem6]=useState(0);
  const [item7,setItem7]=useState(0);
  const [item8,setItem8]=useState(0);


  useEffect(() => {
    async function fetchQuantities() {
      try {
        const responses = await Promise.all([
          fetch('/ItemDetails/1/quantity'),
          fetch('/ItemDetails/2/quantity'),
          fetch('/ItemDetails/3/quantity'),
          fetch('/ItemDetails/4/quantity'),
          fetch('/ItemDetails/5/quantity'),
          fetch('/ItemDetails/6/quantity'),
          fetch('/ItemDetails/7/quantity'),
          fetch('/ItemDetails8/quantity')
        ]);

        const quantities = await Promise.all(responses.map(response => response.json()));
        setItem1(quantities[0]);
      
        setItem2(quantities[1]);
        setItem3(quantities[2]);
        setItem4(quantities[3]);
        setItem5(quantities[4]);
        setItem6(quantities[5]);
        setItem7(quantities[6]);
        setItem8(quantities[7]);
      } catch (error) {
        console.error('Error while fetching quantities:', error);
      }
    }

    fetchQuantities();
  }, []);

  const [date,setDate]=useState("");

  const [itemAdd1,setItemAdd1]=useState(0);
  const [itemAdd2,setItemAdd2]=useState(0);
  const [itemAdd3,setItemAdd3]=useState(0);
  const [itemAdd4,setItemAdd4]=useState(0);
  const [itemAdd5,setItemAdd5]=useState(0);
  const [itemAdd6,setItemAdd6]=useState(0);
  const [itemAdd7,setItemAdd7]=useState(0);
  const [itemAdd8,setItemAdd8]=useState(0);


 
  
  const handleSaveButtonClick = async () => {
    setItem1(item1 + itemAdd1);
    setItem2(item2 + itemAdd1);
    setItem3(item3 + itemAdd1);
    setItem4(item4 + itemAdd1);
    setItem5(item5 + itemAdd1);
    setItem6(item6 + itemAdd1);
    setItem7(item7 + itemAdd1);
    setItem8(item8 + itemAdd1);

    try {

      await axios.put(`http://localhost:8080/ItemDetails/${1}/quantity`, {
        newQuantity: item1,
      });

      await axios.put(`http://localhost:8080/ItemDetails/${2}/quantity`, {
        newQuantity: item2,
      });
      await axios.put(`http://localhost:8080/ItemDetails/${3}/quantity`, {
        newQuantity: item3,
      });
      await axios.put(`http://localhost:8080/ItemDetails/${4}/quantity`, {
        newQuantity: item4,
      });
      await axios.put(`http://localhost:8080/ItemDetails/${5}/quantity`, {
        newQuantity: item5,
      });
      await axios.put(`http://localhost:8080/ItemDetails/${6}/quantity`, {
        newQuantity: item6,
      });
      await axios.put(`http://localhost:8080/ItemDetails/${7}/quantity`, {
        newQuantity: item7,
      });
      await axios.put(`http://localhost:8080/ItemDetails/${8}/quantity`, {
        newQuantity: item8,
      });
    

    
      //toast.success("Quantities updated successfully!");
    
  
    } catch (error) {
      // toast.error("An error occurred while updating the quantities. Please try again later.");
      console.error(error);
    }
    
  };


  

  return (
    <React.Fragment>
      <h1>Add Items</h1>
      <div className=" d-flex justify-content-center ">
        <div className="d-flex w-50" >
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

              <tr>
                <td>Add Items</td>
                <td scope="col"><input type="date" className="form-control" value={date}
                onChange={(e)=>setDate(e.target.value)}
                /></td>
                
                <td scope="col">  <button type="submit" class="btn btn-warning me-2 w-100"  onClick={handleSaveButtonClick}>
                   save
                  </button></td>
            
              </tr>
            </thead>
          
          </table>

              
                
                  
              

          
        </div>
      </div>
   
      
    </React.Fragment>
  );
};

export default AddItems;
