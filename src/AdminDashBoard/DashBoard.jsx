import React, { useState } from 'react'
import Barchart from './BarChart';
import { UserData } from './Data';

const Charts  = () => {
    const [userData,setUserData]=useState({
        labels:UserData.map((data)=> data.Letter),
        datasets:[{
            label:"UserGained",
            data:UserData.map((data)=>data.Freq)
        }]
    });
    return ( 
        <React.Fragment>
    <Barchart chartData={userData}/>
    </React.Fragment>
     );
}
 
export default Charts;