import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const CollectDonations = () => {
    return ( 
        <React.Fragment>
            <div className='mb-4'>
                <h2>Collect These Donations</h2>
            </div>
            <div class="card bg-light text-dark">
                <div class="card-body">
                    <h4>Donar: D.K Perera</h4>
                    <br/>

                    <p>
                    Address: Galle<br/>
                    Nearest Location: Gampaha<br/>
                    Date: 2023.5.12
                    </p>

                    
                    <div class="btn d-flex justify-content-end">
                    <button type="button" class="btn btn-warning ">
                    <FaPlusCircle className='icon' />
                        Collected
                    </button>
                    <button type="button" class="btn btn-outline-dark ms-2">
                    <AiFillDelete className='icon' />
                        Not Received
                        </button>
                    </div>


                </div>
                </div>

        </React.Fragment>

     );
}
 
export default CollectDonations;