import React,{useState} from 'react';
import './Packing.css';

const AddPackages = () => {

    const [type1Quantity, setType1quantity] = useState(34);
    const [type2Quantity, setType2quantity] = useState(9);
    const [type3Quantity, setType3quantity] = useState(25);
    const [addingDate, setAddingDate] = useState('');
  
    const [type1AddQuantity, setType1Addquantity] = useState("");
    const [type2AddQuantity, setType2Addquantity] = useState("");
    const [type3AddQuantity, setType3Addquantity] = useState("");
  
    const [error, setError] = useState({});
  
    function handleSubmit(event) {
      event.preventDefault();
      const errors=validateInputs();
    
      if (Object.keys(errors).length === 0) {
        // submit form
        //  event.target.reset();
              // Update state
      setType1quantity(type1Quantity + parseInt(type1AddQuantity));
      setType2quantity(type2Quantity + parseInt(type2AddQuantity));
      setType3quantity(type3Quantity + parseInt(type3AddQuantity));
  
      // Reset input fields
      setType1Addquantity("");
      setType2Addquantity("");
      setType3Addquantity("");
      setAddingDate("");
  
      setError("");
        console.log('Form submitted successfully!');

        
      } else {
        setError(errors);
      }

    }

    function validateInputs(){
      // Validate inputs
      const errors = [];
      if (!type1AddQuantity || isNaN(type1AddQuantity) || type1AddQuantity < 0) { // is not a number isNaN
        errors.type1AddQuantity="* Invalid quantity for type 1 package";
      }
      if (!type2AddQuantity || isNaN(type2AddQuantity) || type2AddQuantity < 0) {
        errors.type2AddQuantity="* Invalid quantity for type 2 package";
      }
      if (!type3AddQuantity || isNaN(type3AddQuantity) || type3AddQuantity < 0) {
        errors.type3AddQuantity="* Invalid quantity for type 3 package";
      }
      if (addingDate.trim() === '') {
        errors.addingDate = '* Packed Date is required';
      }
      return errors;
    }

    function handleReset(event){
        event.preventDefault();
    // Reset input fields
      setType1Addquantity("");
      setType2Addquantity("");
      setType3Addquantity("");
      setAddingDate(""); 
    }

        return ( 
        <React.Fragment>
        <h2>Add packages</h2>
        <p>Enter details about packed items</p>
        
        <div className='mmcontain d-flex mb-4'>
            <div className='sidecontent w-25 d-flex flex-column d-flex justify-content-center align-items-center mb-5'>
                <h3>Current Storage</h3>
                <div className="badge bg-secondary w-75 p-4 m-2 fs-5">Type 1<span className='badge bg-light text-dark ps-3 pe-3 ms-1'>{type1Quantity}</span></div>
                <div className="badge bg-secondary w-75 p-4 m-2 fs-5">Type 2 <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>{type2Quantity}</span></div>
                <div className="badge bg-secondary w-75 p-4 m-2 fs-5">Type 3  <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>{type3Quantity}</span></div>

            </div>
        <div className='mcontain w-75 mb-5'>
        <div class="container bg-light m-2 rounded ">
            <div className='bg-secondary text-center p-1 mb-2 rounded '><h3 className='text-white'>Add package Details</h3></div>
            <div className='content d-flex'>
            <form class="row g-4 m-2" onSubmit={handleSubmit}>
                
                <div class="col-md-4">
                    <label for="inputType1" class="form-label">Package Type 1</label>
                    <input type="number" class="form-control" id="inputType1" 
                    value={type1AddQuantity} 
                    onChange={(e) => setType1Addquantity(e.target.value)}/>
                    {error.type1AddQuantity && <span className="error">{error.type1AddQuantity}</span>}
                </div>
                <div class="col-md-4">
                    <label for="inputType2" class="form-label">Package Type 2</label>
                    <input type="number" class="form-control" id="inputType2" 
                    value={type2AddQuantity}
                    onChange={(e)=>setType2Addquantity(e.target.value)}/>
                     {error.type2AddQuantity && <span className="error">{error.type2AddQuantity}</span>}
                </div>
                <div class="col-md-4">
                    <label for="inputType2" class="form-label">Package Type 3</label>
                    <input type="number" class="form-control" id="inputType2"
                    value={type3AddQuantity}
                    onChange={(e)=>setType3Addquantity(e.target.value)} />
                       {error.type3AddQuantity && <span className="error">{error.type3AddQuantity}</span>}
                </div>
                
                <div class="col-md-4">
                    <label for="inputDate" class="form-label">Packed Date</label>
                    <input type="date" class="form-control" id="inputDate"
                    value={addingDate} 
                    onChange={(e)=>setAddingDate(e.target.value)} />
                    {error.addingDate && <span className="error">{error.addingDate}</span>}
                </div>

                <div className='d-flex justify-content-end'>
                <button type="submit" class="btn btn-primary me-2"  >Add Packages</button>
                <button type="button" class="btn btn-warning" onClick={handleReset}>Reset</button>

                </div>



            </form>
            </div>
        </div>
        </div>
        </div>


        <h2>Package Adding Summary</h2>
        <p>Most recent updates to package collection can be viewd here</p>

        <div className='tablecontainer  d-flex justify-content-center'>
        <table class="table table-striped table-secondary table-hover m-2 ">
            <thead className=''>
                <tr>
                <th scope="col"></th>
                <th scope="col">Package Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Date added</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className="align-middle;" rowSpan={3}>1</th>
                <td>Type A</td>
                <td>12</td>
                <td rowSpan={3} className="align-middle;">2023-03-12</td>
                </tr>
                <tr>
                <td>Type B</td>
                <td>13</td>
                </tr>
                <tr>
                <td>Type C</td>
                <td>32</td>
                </tr>

                <tr>
                <th scope="row" className="align-middle;" rowSpan={3}>2</th>
                <td>Type A</td>
                <td>12</td>
                <td rowSpan={3} className="align-middle;">2023-03-14</td>
                </tr>
                <tr>
                <td>Type B</td>
                <td>20</td>
                </tr>
                <tr>
                <td>Type C</td>
                <td>23</td>
                </tr>
            </tbody>
        </table>
        </div>
        </React.Fragment>
     );
}
 
export default AddPackages;