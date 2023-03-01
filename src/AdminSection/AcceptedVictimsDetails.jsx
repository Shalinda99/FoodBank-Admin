import React from 'react';
import Button1 from './Button1';

const DataSupplierDetails = () => {
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
            <h2>Accepted Victims Details</h2>
            <br/>

            <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">NIC</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Location</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            <td>204059X</td>
                            <td>Tharushni Gamage</td>
                            <td>0769442613</td>
                            <td>Galle</td>
                            </tr>

                            <tr>
                            <td>204215A</td>
                            <td>Milanka Tharangana</td>
                            <td>0769442613</td>
                            <td>Galle</td>
                            </tr>

                            <tr>
                            <td>204200A</td>
                            <td>Amal Shalinda</td>
                            <td>0769442613</td>
                            <td>Galle</td>
                            </tr>

                            <tr>
                            <td>204145H</td>
                            <td>Fathima Nuska</td>
                            <td>0769442613</td>
                            <td>Galle</td>
                            </tr>

                            <tr>
                            <td>204216X</td>
                            <td>Thareejan</td>
                            <td>0769442613</td>
                            <td>Galle</td>
                            </tr>

                           
                        </tbody>

                    </table>
                    </div>

                    <div class="d-flex justify-content-end  mb-3 ">

                    <Button1 style="margin-top: 20px;" variant="secondary" bg="grey" text="View Rejected List" textColor="dark" page="/RejectedVictimsDetails" />
                    </div>

           </div>
        </React.Fragment>
     );
}
 
export default DataSupplierDetails;