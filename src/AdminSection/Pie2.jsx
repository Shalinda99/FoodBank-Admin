import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class Pie2 extends React.Component {
   COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
   pieData = [
      {
         name: "Apple",
         value: 54.85
      },
      {
         name: "Samsung",
         value: 37.91
      },
      {
         name: "Redmi",
         value: 25.85
      },
      {
         name: "One Plus",
         value: 16.14
      },
      {
         name: "Others",
         value: 11.25
      }
   ];
   pieData2 = [
      {
         name: "Apple",
         value: 24.85
      },
      {
         name: "Samsung",
         value: 47.91
      },
      {
         name: "Redmi",
         value: 36.85
      },
      {
         name: "One Plus",
         value: 25.14
      },
      {
         name: "Others",
         value: 1.25
      }
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`} </label>
         </div>
      );
   }
   return null;
};
render() {
   return (
      <PieChart width={730} height={300}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      );
   }
}
export default Pie2;