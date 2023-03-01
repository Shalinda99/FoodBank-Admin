import React from 'react';
import './Packing.css';

const PackingHome = () => {
    return ( 
        <React.Fragment>
         <div className='m-2 w-100'>
         <div className='types m-2 p-1 d-flex justify-content-around'>
                <div className="badge bg-secondary w-25 p-4 m-2 fs-5">Type 1<span className='badge bg-light text-dark ps-3 pe-3 ms-1'>34</span></div>
                <div className="badge bg-secondary w-25 p-4 m-2 fs-5">Type 2 <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>9</span></div>
                <div className="badge bg-secondary w-25 p-4 m-2 fs-5">Type 3  <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>25</span></div>

         </div>
         </div>

            

           
            
        </React.Fragment>
     );
}
 
export default PackingHome;