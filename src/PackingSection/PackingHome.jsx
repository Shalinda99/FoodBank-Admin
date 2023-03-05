import React,{useState} from 'react';
import './Packing.css';

const PackingHome = () => {
    const [showColumn1, setShowColumn1] = useState(false);
    const [item1, setItem1] = useState(5);
    const [item2, setItem2] = useState(2);

    const [newItem1, setNewItem1] = useState("");
    const [newItem2, setNewItem2] = useState("");

    const handleClick = () => {
      setShowColumn1(true);
    };

    const handleSet = () => {
        setShowColumn1(false);

        setItem1(parseInt(newItem1));
        setItem2(parseInt(newItem2));
      };
    return ( 
        <React.Fragment>
         <div className='m-2 w-100'>
         <div className='types m-2 p-1 d-flex justify-content-around'>
                <div className="badge bg-secondary w-50 p-4 m-2 mb-2 fs-5">
                    <div>
                    Package Type 1<span className='badge bg-light text-dark ps-3 pe-3 ms-1' >34</span>
                    </div>
                    <div className='tablecontainer  d-flex justify-content-center m1'>
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
                                <td>Item A</td>
                                <td>{item2} Kg</td>
                                 {showColumn1 && <td>
                                    <input type="number" class="form-control" id="inputType2" 
                                    value={newItem2}
                                    onChange={(e)=>setNewItem2(e.target.value)}/>
                                </td>}
                                </tr>


                                
                            </tbody>
                        </table>
                    </div>

                    <button type="button" class="btn btn-primary m-2 float-end" onClick={handleClick} >Update</button>
                    {showColumn1 && <button type="button" class="btn btn-warning m-2 float-end" onClick={handleSet} >Set values</button> }
                </div>
                <div className="badge bg-secondary w-25 p-4 m-2 fs-5">Type 2 <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>9</span></div>
                <div className="badge bg-secondary w-25 p-4 m-2 fs-5">Type 3  <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>25</span></div>

         </div>
         </div>
         

            

           
            
        </React.Fragment>
     );
}
 
export default PackingHome;