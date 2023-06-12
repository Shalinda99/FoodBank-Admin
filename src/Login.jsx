import React, { useState } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    
    const navigate = useNavigate();
    const [path,setpath]=useState('/');
    
    return ( 
        <div className='wrapper '>
                
            
            <div className='leftcontainer d-flex flex-column  w-75'>
                <div className='start ms-5 mt-4 mb-5 p-4'>
                    <h3>Welcome to</h3>
                    <h2>FOOD BANK</h2>
                </div>
                
                <div className='middle mt-5 ms-4 p-5 d-flex flex-column'>
                    <h1>FEED THE<br/> NEED</h1>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;Share Food, Save Lives</h2>
                    
                    
                </div>
                
             
            </div>
            
            {/* <span className='leftcontainer d-flex align-items-center w-75'>
                <h2 className='d-flex justify-content-start ms-5'>Share Foods Save lives</h2>
            </span> */}
            <div className='login d-flex align-items-center justify-content-center flex-column '>
                <h1 class="text-center mb-5"><b>FOOD BANK</b></h1>
                <div className='mb-5'>< GrUserAdmin size={'5rem'}/></div>
                <h3 class="text-center">ADMIN PANEL</h3>
                <h4 class="text-center mb-5">Login to your Account</h4>
                
                
                <form className='needs-validation '>
                 <div className='form-group was-validated mb-2'>
                    <label htmlFor='username' className='form-label'>User name</label> 
                    <input type="text" className='form-control'  placeholder='User name' required></input>

                    <div className='invalid-feedback'>
                        Please enter your username
                    </div>
                </div>
                <div className='form-group was-validated mb-2'>
                    <label htmlFor='password'className='form-label'>Password</label>
                    <input type="text" className='form-control'  placeholder='Password' required></input>

                    <div className='invalid-feedback'>
                        Please enter your password
                    </div>
                </div> 
                <label for="admin-role">Choose a Admin Role:</label>

               
                    <select name="adminroles" id="admin-role" onChange={(e) => setpath(e.target.value)}> 
                    {/* route accordingly */}
                    <option >Your role</option>
                    <option value='/AdminHome'>Admin</option>
                    <option value='/AddItems' >Warehouse</option>
                    <option value='/packingSection'>Packing section</option>
                    <option value='/deliverySection'>Delivery Section</option>
                    
                    
                    
                </select>  
                            
                <div class="col-md-12 text-center mt-5">
                <button type='submit' className='btn btn-success block mt-2' onClick={() => navigate(path)}>Sign In</button>
                </div>
                  
             

                </form>
                
            </div>
        </div>
     );
}
 
export default AdminLogin;