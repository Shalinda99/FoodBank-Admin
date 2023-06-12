import React, { useEffect, useState } from 'react';
import Box2 from './Box2';
import './Box2.css';
import Button from './Button';


const PackageRequsition2 = () => {
  const[data,setData]=useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/PackageRequisition/package-count")
      .then((response) => response.json())
      .then((jsondata) => setData(jsondata));
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Package Requisition</div>
        </div>
      

      {Object.entries(data).map(([key, value])=>(
          <div className="d-flex align-items-center justify-content-center" key={key}>
              <Box2 text={`Type ${key} :${value}`} />
          </div>
      )
      )
      }
      <div className="d-flex justify-content-end align-items-end mb-3">
         <div className="align-self-end ml-10 "> 
         <Button style="margin-top: 20px;" variant="secondary" bg="grey" text="Submit" textColor="dark" />
         </div>
      </div>
    </React.Fragment>
  );
};

export default PackageRequsition2;
