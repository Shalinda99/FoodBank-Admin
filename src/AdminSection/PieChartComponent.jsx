import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useState, useEffect } from "react";

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

const PieChartComponent = () => {
   const [verifiedVictimDetails, setVerifiedVictimDetails] = useState(0);
   const [pendingVictimDetails, setPendingVictimDetails] = useState(0);
   const [packageTypes,setPackageTypes]=useState([]); //Need pie Chart
   //Need pie Chart
   useEffect(() => {
      fetch('http://localhost:8080/Victim/verified-count')
        .then(response => response.json())
        .then(data => setVerifiedVictimDetails(data))
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8080/Victim/pending-count')
        .then(response => response.json())
        .then(data => setPendingVictimDetails(data))
        .catch(error => console.error(error));
    }, []);
   //  http://localhost:8080/packageTypes/getPackageTypeQuantities
    useEffect(() => {
      fetch('http://localhost:8080/packageTypes/getPackageTypeQuantities')
        .then(response => response.json())
        .then(data => setPackageTypes(data))
        .catch(error => console.error(error));
    }, []);

  const pieData = [
    {
      name: "Verified VictimDetails",
      value: verifiedVictimDetails
    },
    {
      name: "Pending VictimDetails",
      value: pendingVictimDetails
    },
   
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
          <label>{`${payload[0].name} : ${payload[0].value}%`} </label>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={730} height={300}>
      <Pie
        data={pieData}
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

export default PieChartComponent;
