import React from 'react';
import Box2 from './Box2';
import Button from './Button';


const PackageRequsition2 = () => {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center" >
         <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Package Needed</div>
      </div>

      <div class="row">
          <div class="col-sm-6">
          <Box2 text=" Type A : Packages 10" />
          </div>

          <div class="col-sm-6">
          <Box2 text=" Type B : Packages 10" />
          </div>
      </div>

      <div class="row">
          <div class="col-sm-6">
          <Box2 text=" Type C : Packages 10" />
          </div>
      </div>

      <div class="d-flex justify-content-end align-items-end mb-3">
         <div class="align-self-end ml-10 "> 
         <Button style="margin-top: 20px;" variant="secondary" bg="grey" text="Submit" textColor="dark" />
         </div>
      </div>


    </React.Fragment>
  );
};

export default PackageRequsition2;
