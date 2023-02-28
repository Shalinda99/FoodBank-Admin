import React from 'react';

const PackageIsues = () => {
    return ( 
        <React.Fragment>
        <h2>Issue packages</h2>
        <p>Enter details about issued packages</p>
        
        <div className='d-flex mb-4 w-100'>
        <div className='sidecontent w-25 bg-warning d-flex flex-column d-flex justify-content-center align-items-center mb-5'>
                <h3>Requsition</h3>
                <div className="badge bg-secondary w-75 p-4 m-2 fs-5">Type 1<span className='badge bg-light text-dark ps-3 pe-3 ms-1'>34</span></div>
                <div className="badge bg-secondary w-75 p-4 m-2 fs-5">Type 2 <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>9</span></div>
                <div className="badge bg-secondary w-75 p-4 m-2 fs-5">Type 3  <span className='badge bg-light text-dark ps-3 pe-3 ms-1'>25</span></div>

            </div>
        <div className='mcontain w-75 mb-5'>
        <div class="container bg-light m-2 rounded ">
            <div className='bg-secondary text-center p-1 mb-2 rounded '><h3 className='text-white'>Add package Details</h3></div>
            <div className='content d-flex'>
            <form class="row g-4 m-2">
                
                <div class="col-md-4">
                    <label for="inputType1" class="form-label">Package Type 1</label>
                    <input type="number" class="form-control" id="inputType1" />
                </div>
                <div class="col-md-4">
                    <label for="inputType2" class="form-label">Package Type 2</label>
                    <input type="number" class="form-control" id="inputType2" />
                </div>
                <div class="col-md-4">
                    <label for="inputType2" class="form-label">Package Type 2</label>
                    <input type="number" class="form-control" id="inputType2" />
                </div>
                
                <div class="col-md-4">
                    <label for="inputDate" class="form-label">Issuing Date</label>
                    <input type="date" class="form-control" id="inputDate"  />
                </div>

                <div className='d-flex justify-content-end'>
                <button type="button" class="btn btn-primary me-2">Issue Packages</button>
                <button type="button" class="btn btn-warning">Reset</button>

                </div>



            </form>
            </div>
        </div>
        </div>
        </div>

<h2>Package Issues Summary</h2>
        <p>Most recent issues to delivery collection can be viewd here</p>

        <div className='tablecontainer  d-flex justify-content-center'>
        <table class="table table-striped table-secondary table-hover m-2 ">
            <thead className=''>
                <tr>
                <th scope="col"></th>
                <th scope="col">Package Type</th>
                <th scope="col">Isuued Quantity</th>
                <th scope="col">Date issued</th>
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
 
export default PackageIsues;