import React from 'react';
import { PieChart } from "react-minimal-pie-chart";

let data = [
    { title: "One", value: 1, color: "#FFC074" },
    { title: "Two", value: 2, color: "#A2D2FF" },
    { title: "Three", value: 3, color: "#FF9292" },
  ];
const PieComponent = () => {
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
        <div className='d-f'><h3>Victim Information</h3></div>
      </div>
            </React.Fragment>
     );
}
 
export default PieComponent;