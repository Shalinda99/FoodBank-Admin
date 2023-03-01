import React from 'react';
import './DataSupplierDetails.css';

const DataSupplierDetails = () => {
    return ( 
        <React.Fragment>
            <div>
                <div>
                    <h3>Data Supplier Statistics</h3>

                    <div className='cardcontainer d-flex  justify-content-around mt-4 text-white  '>


                    <div className='card1 mb-4 rounded  text-center card bg-dark '>
                    <div className='m-2'>
                    <p>Above minimum point level</p>
                    <h2>84</h2>
                    </div>
                    </div>

                    <div className='card2 mb-4 rounded  text-center card bg-dark '>
                    <div className='m-2'>
                    <p>Below minimum point level</p>
                    <h2>12</h2>
                    </div>
                    </div>

                    <div className='card3 mb-4 rounded  text-center card bg-dark '>
                    <div className='m-2'>
                    <p>Total</p>
                    <h2>96</h2>
                    </div>
                    </div>



                    </div>

                </div>

                <br/>
                <br/>

                <div>
                    <h3>Data Supplier Details</h3>

                    <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Data_Supplier_ID</th>
                            <th scope="col">Name</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>204059X</td>
                            <td>Tharushni Gamage</td>
                            </tr>

                            <tr>
                            <td>204215A</td>
                            <td>Milanka Tharangana</td>
                            </tr>

                            <tr>
                            <td>204200A</td>
                            <td>Amal Shalinda</td>
                            </tr>

                            <tr>
                            <td>204145H</td>
                            <td>Fathima Nuska</td>
                            </tr>

                            <tr>
                            <td>204216X</td>
                            <td>Thareejan</td>
                            </tr>

                        </tbody>

                    </table>
                    </div>
                </div>
            </div>


            
            
        </React.Fragment>
     );
}
 
export default DataSupplierDetails;