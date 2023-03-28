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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import PieComponent from "./PieChart";
import PieChart2 from "./pieChart2";

const Dashboard = () => {
  const [currentMoney, setCurrentMoney] = useState(0);
  const [verifiedVictimDetails, setVerifiedVictimDetails] = useState(0); //Need pie Chart
  const [pendingVictimDetails, setPendingVictimDetails] = useState(0); //Need pie Chart
  const [currentStockPackage, setCurrentStockPackage] = useState(0); //each type graph
  const [deliveryInformation, setDeliveryInformation] = useState(0); //each type graph card and pie chart
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
  // useEffect(() => {
  //   fetch('http://localhost:8080/Victim/unverified-count')
  //     .then(response => response.json())
  //     .then(data => setVerifiedVictimDetails(data))
  //     .catch(error => console.error(error));
  // }, []);
  // useEffect(() => {
  //   fetch('http://localhost:8080/Victim/verified-count')
  //     .then(response => response.json())
  //     .then(data => setPendingVictimDetails(data))
  //     .catch(error => console.error(error));
  // }, []);
  return (
    <React.Fragment>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
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
            title={"Current Stock Package"}
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
            title={"Delivery Information Details"}
            value={deliveryInformation}
          />
        </Space>
      </Space>
      <div className="d-flex justify-content-around w-75">
        <div className="d-flex justify-content-center	">
        <PieComponent />
        </div>
        <div className="d-flex justify-content-center	">
        <PieChart2 />
        </div>
      
        
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
