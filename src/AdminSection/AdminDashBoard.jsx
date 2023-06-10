import React from "react";
// import { data } from './chartDataApi';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import PieRechartComponent from "./PieChartComponent";
import Pie2 from "./Pie2";
import axios from "axios";

const Dashboard = () => {
  const [currentMoney, setCurrentMoney] = useState(0);
  const [verifiedVictimDetails, setVerifiedVictimDetails] = useState(0); //Need pie Chart
  const [pendingVictimDetails, setPendingVictimDetails] = useState(0); //Need pie Chart
  const [currentStockPackage, setCurrentStockPackage] = useState(0); //each type graph
  const [deliveryInformation, setDeliveryInformation] = useState(0); //each type graph card and pie chart
  const [topDataSupplierData, setTopDataSupplierData] = useState([]);
  const [topDonors, setTopDonors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/MoneyDonate/sum')
      .then(response => response.json())
      .then(data => setCurrentMoney(data))
      .catch(error => console.error(error));
  }, []);
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
  useEffect(() => {
    fetch('http://localhost:8080/ItemDetails/total-quantity')
      .then(response => response.json())
      .then(data => setCurrentStockPackage(data))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8080/Delivery/pending-count')
      .then(response => response.json())
      .then(data => setDeliveryInformation(data))
      .catch(error => console.error(error));
  }, []);
  // http://localhost:8080/RegisteredUser/top-data-suppliers
  
  useEffect(() => {
    fetch('http://localhost:8080/RegisteredUser/top-data-suppliers')
    .then(response => response.json())
    .then(data => setTopDataSupplierData(data))
    .catch(error => console.error(error));
    console.log(topDataSupplierData);
  }, []);
  useEffect(() => {
    fetch('http://localhost:8080/RegisteredUser/top-donaters')
      .then(response => response.json())
      .then(data => setTopDonors(data))
      .catch(error => console.log(error));
  }, []);
    

  
  
  // const topDatasupplierData = [
  //   { name: "John", points: 100 },
  //   { name: "Kamal", points: 80 },
  //   { name: "Sudeep", points: 70 },
  //   { name: "df", points: 60 },
  //   { name: "fsvd", points: 50 },
  // ];
  // const topDonaterData = [
  //   { name: "Amal", points: 98 },
  //   { name: "fff", points: 78 },
  //   { name: "hrt", points: 65 },
  //   { name: "df", points: 60 },
  //   { name: "fsvd", points: 36 },
  // ];



  return (
    <React.Fragment>
      {/* <Space size={20} direction="vertical"> */}
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <div className="d-flex justify-content-between">
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Total Donation Money"}
            value={currentMoney}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Verified Victim Details"}
            value={verifiedVictimDetails}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Pending Victim Details"}
            value={pendingVictimDetails}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Package Details"}
            value={currentStockPackage}
          />
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Pending Deliveries"}
            value={deliveryInformation}
          />
        </div>
      {/* </Space> */}
      <div>
      <div className="d-flex justify-content-md-around" >
        <Table dataSource={topDataSupplierData}>
        <Table.Column title="Donator Name" dataIndex="name" key="name" />
        <Table.Column title="Points" dataIndex="points" key="points" />
   
        </Table>
        <Table dataSource={topDonors}>
        <Table.Column title="Data Supplier" dataIndex="name" key="name" />
        <Table.Column title="Points" dataIndex="points" key="points" />
        </Table>

      </div>
      
      <div className="d-flex justify-content-md-around">
        <PieRechartComponent/>
        <Pie2/>
      </div>

      </div>
        <div className="d-flex justify-content-center	">
    
        </div>
        
    </React.Fragment>
  );
};

export default Dashboard;

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}