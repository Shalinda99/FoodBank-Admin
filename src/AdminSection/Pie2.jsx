import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {  useEffect } from "react";



const Pie2 = () => {
   const [packageTypes,setPackageTypes]= useState([]); //Need pie Chart
   useEffect(() => {
      fetch('http://localhost:8080/packageTypes/getPackageTypeQuantities')
        .then(response => response.json())
        .then(data => setPackageTypes(data))
        .catch(error => console.error(error));
    }, []);
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
const pieData = [
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
  const CustomTooltip = ({ active, payload, label }) => {
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
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={730} height={300}>
      <Pie
        data={packageTypes}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  );
};

export default Pie2;
