import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import React from 'react';
import { Bar} from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'No of Donations',
        data: [20, 30, 25, 35, 40, 45, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

const Barcharts = () => {
    return ( 
        <div>
            <Bar data={data}/>

        </div>
     );
}
 
export default Barcharts;
