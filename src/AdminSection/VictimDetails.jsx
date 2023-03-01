import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Button1 from './Button1';

const VictimDetails = () => {
    return ( 
        <React.Fragment>

            <div>
            <div class="dropdown d-flex justify-content-end">
                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All dropdown       
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
            <br/>

            <div>
                <div class="card bg-light text-dark">
                <div class="card-body">
                    <h4>Data Supplier: D.K Perera</h4>
                    <br/>

                    <p>
                    Victim Name: D.S Kamal<br/>
                    Victim NIC: 785469213V<br/>
                    Contact: 0775684965<br/>
                    Location: Gampaha
                    </p>

                    
                    <div class="btn d-flex justify-content-end">
                    <button type="button" class="btn btn-warning ">
                    <FaPlusCircle className='icon' />
                        Accept
                    </button>
                    <button type="button" class="btn btn-outline-dark ms-2">
                    <AiFillDelete className='icon' />
                        Decline
                        </button>
                    </div>


                </div>
                </div>
                
                <br/>

                <div class="card bg-light text-dark">
                <div class="card-body">
                    <h4>Data Supplier: D.K Perera</h4>
                    <br/>

                    <p>
                    Victim Name: D.S Kamal<br/>
                    Victim NIC: 785469213V<br/>
                    Contact: 0775684965<br/>
                    Location: Gampaha
                    </p>

                    
                    <div class="btn d-flex justify-content-end">
                    <button type="button" class="btn btn-warning ">
                    <FaPlusCircle className='icon' />
                        Accept
                    </button>
                    <button type="button" class="btn btn-outline-dark ms-2">
                    <AiFillDelete className='icon' />
                        Decline
                        </button>
                    </div>


                </div>
                </div>

                <div class="d-flex justify-content-end  mb-3 mt-3">
                    <div><Button1   text="View Accepted List" textColor="dark" page="/AcceptedVictimsDetails" /></div>
                    <div className='ms-2'> <Button1  text="View Rejected List" textColor="dark" page="/RejectedVictimsDetails" /></div>
                
               
                </div>
                

                


            </div>
              
        </React.Fragment>
     );
}
 
export default VictimDetails;