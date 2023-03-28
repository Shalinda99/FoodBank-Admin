import React from 'react';
import { PieChart } from "react-minimal-pie-chart";

let data = [
    { title: "pending", value: 2, color: "#FFC074" },
    { title: "Verified", value: 2, color: "#A2D2FF" },
    { title: "Rejected", value: 5, color: "#FF9292" },
  ];
const PieChart2 = () => {
    return ( 
        <React.Fragment>
            <div>
        <PieChart
          animate
          animationDuration={40}
          animationEasing="ease-in"
          center={[50, 50]}
          data={data}
          lineWidth={15}
          lengthAngle={360}
          paddingAngle={0}
          radius={30}
          rounded
          startAngle={90}
          viewBoxSize={[100, 100]}
          labelStyle={{
            fontSize: "6px",
            fontColor: "FFFFFA",
            fontWeight: "500",
            fontFamily: "monospace"
          }}
          label={(data) => data.dataEntry.title}
          labelPosition={70}
        />
        <div className='d-f'><h3>Delivery Information</h3></div>
      </div>
            </React.Fragment>
     );
}
 
export default PieChart2;