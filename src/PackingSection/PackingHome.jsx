import React,{useState} from 'react';
import './Packing.css';

const PackingHome = () => {
    const [showColumn1, setShowColumn1] = useState(false);
    const [item1, setItem1] = useState(5);
    const [item2, setItem2] = useState(2);
    const [item3, setItem3] = useState(3);
    const [item4, setItem4] = useState(5);
    const [item5, setItem5] = useState(2);
    const [item6, setItem6] = useState(8);
    const [item7, setItem7] = useState(3);
    const [item8, setItem8] = useState(8);

    const [newItem1, setNewItem1] = useState("");
    const [newItem2, setNewItem2] = useState("");
    const [newItem3, setNewItem3] = useState("");
    const [newItem4, setNewItem4] = useState("");
    const [newItem5, setNewItem5] = useState("");
    const [newItem6, setNewItem6] = useState("");
    const [newItem7, setNewItem7] = useState("");
    const [newItem8, setNewItem8] = useState("");


    const handleClick = () => {
      setShowColumn1(true);
    };

    const handleSet = () => {
        setShowColumn1(false);

        setItem1(parseInt(newItem1));
        setItem2(parseInt(newItem2));
        setItem3(parseInt(newItem3));
        setItem4(parseInt(newItem4));
        setItem5(parseInt(newItem5));
        setItem6(parseInt(newItem6));
        setItem7(parseInt(newItem7));
        setItem8(parseInt(newItem8));
      };
    return ( 
        <React.Fragment>
         <div className='m-2 w-100'>
         <div className='types m-2 p-1 d-flex justify-content-around'>
                <div className="badge bg-secondary w-50 p-4 m-2 mb-2 fs-5">
                    <div>
                    Package Type 1<span className='badge bg-light text-dark ps-3 pe-3 ms-1' >34</span>
                    </div>
                    <div className='tablecontainer  d-flex justify-content-center m1 mt-3'>
                      <table class="table table-striped table-secondary table-hover m-2 ">
                            <thead className=''>
                                <tr>
                                <th scope="col">Item Name</th>
                                <th scope="col">Quantity</th>
                                {showColumn1 && <th>New Qunatity</th>}
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>   
                                <td>Item A</td>
                                <td>{item1} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem1}
                                    onChange={(e)=>setNewItem1(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item B</td>
                                <td>{item2} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem2}
                                    onChange={(e)=>setNewItem2(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item C</td>
                                <td>{item3} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem3}
                                    onChange={(e)=>setNewItem3(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item D</td>
                                <td>{item4} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem4}
                                    onChange={(e)=>setNewItem4(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item E</td>
                                <td>{item5} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem5}
                                    onChange={(e)=>setNewItem5(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item F</td>
                                <td>{item6} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem6}
                                    onChange={(e)=>setNewItem6(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item G</td>
                                <td>{item7} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem7}
                                    onChange={(e)=>setNewItem7(e.target.value)}/>
                                </td>}
                                </tr>

                                <tr>   
                                <td>Item H</td>
                                <td>{item8} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem8}
                                    onChange={(e)=>setNewItem8(e.target.value)}/>
                                </td>}
                                </tr>


                                
                            </tbody>
                        </table>
                    </div>

                    <button type="button" class="btn btn-primary m-2 float-end" onClick={handleClick} >Update</button>
                    {showColumn1 && <button type="button" class="btn btn-warning m-2 float-end" onClick={handleSet} >Set values</button> }
                </div>
                <div className="badge bg-secondary w-50 p-4 m-2 fs-5">Type 2 <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>9</span></div>
                <div className="badge bg-secondary w-50 p-4 m-2 fs-5">Type 3  <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>25</span></div>

         </div>
         </div>
         

            

           
            
        </React.Fragment>
     );
}
 
export default PackingHome;