import React from 'react';
import Box2 from './Box2';
import './Box2.css';
import Button from './Button';


const PackageRequsition2 = () => {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center" >
         <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Package Needed</div>
      </div>
       
      <div class=" maincontainer d-flex justify-content-around">
          <div>  <Box2 text=" Type A : Packages 10" /> </div>
          <div>  <Box2 text=" Type B : Packages 10" /> </div>
          <div>  <Box2 text=" Type C : Packages 10" /> </div>
      </div>

       <div>
          
    <div class="d-flex justify-content-end align-items-end mb-3">
         <Button style="margin-top: 20px;" variant="secondary" bg="grey" text="Submit" textColor="dark" />
      </div>
      </div> 


    

    


    </React.Fragment>
  );
};

export default PackageRequsition2;
