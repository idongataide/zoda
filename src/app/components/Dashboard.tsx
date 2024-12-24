"use client";

import React, { useState, useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend} from "chart.js";
import { Skeleton } from "antd";
import WOW from 'wow.js';  

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const doughnutCenterPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width, height } = chart;
    const ctx = chart.ctx;
    const centerValue = "100m"; 
    const centerLabel = "Total";

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const centerX = width / 2;
    const centerY = height / 2;

    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#939FAE";
    ctx.fillText(centerLabel, centerX, centerY + 10); 

    ctx.font = "24px sans-serif";
    ctx.fillStyle = "#D3E7FF";
    ctx.fillText(centerValue, centerX, centerY + 35); 
    ctx.restore();
  },
};

const Dashboard: React.FC = () => {
const [isLoading, setIsLoading] = useState(true);

const userSignupsData = {
    labels: ["July", "August", "September", "October"],
    datasets: [
        {
        label: "Basic",
        data: [150, 200, 150, 250],
        borderColor: "#ff6384", 
        backgroundColor: "#E9067C", 
        borderWidth: 2, 
        },
        {
        label: "Premium",
        data: [100, 150, 100, 200],
        borderColor: "#36a2eb", 
        backgroundColor: "#94D0FE", 
        borderWidth: 2, 
        },
    ],
 };

  const revenueData = {
    labels: ["Lagos 50%", "Abuja 30%", "Benin 20%", "Niger 13%", "Others 5%",  ],
    datasets: [
      {
        data: [50, 30, 20, 13, 5],
        backgroundColor: ["#95D1FD", "#E9067C", "#9797FC", "#F6C263", "#E3E0DE"],
      },
    ],
  };


  useEffect(() => {
    new WOW().init(); 
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);



  const ordersData = {
    labels: ["July", "September", "October", "November", "December"],
    datasets: [
      { label: "Others", data: [2, 5, 10, 10, 10], backgroundColor: "#E3E0DE" },
      { label: "Niger", data: [18, 20, 30, 15, 30], backgroundColor: "#F6C263" },
      { label: "Benin", data: [25, 20, 35, 40, 30], backgroundColor: "#9797FC" },
      { label: "Abuja", data: [40, 40, 40, 40, 25], backgroundColor: "#E9067C" },
      { label: "Lagos", data: [20, 35, 20, 25, 40], backgroundColor: "#95D1FD" },
    ],
  };

  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
        legend: {
            position: "top" as const,
            labels: {
                boxWidth: 15,
                boxHeight: 15, 
                color: "#ffffff", 
                borderWidth: 0, 
            },
        },
    },
    layout: {
        padding: {
            top: 10,
            bottom: 0, 
        },
    },
    elements: {
        bar: {
          borderRadius: 2.2, 
        },
      },
    scales: {
        x: {
            ticks: {
                color: "#939FAE", 
            },
            grid: { display: true },
        },
        y: {
            ticks: { color: "#939FAE" },
            grid: { display: true },
        },
    },
  };

  
  

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
        boxWidth: 15, 
        boxHeight: 15, 
        color: "#ffffff", 
        borderWidth: 0, 
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return tooltipItem.raw + "%";
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 8, 
        borderColor: "#131B3D", 
      },
    },
    scales: {
      x: { display: false }, 
      y: { display: false }, 
    },
  };

  // I listed the ararays of customers here
  const topCustomers = [
    { name: "Long John", email: "orevbajohn@gmail.com", revenue: 1999, avatar: "/assets/images/avatars/c1.png" },
    { name: "V Morgan", email: "vmorgan@gmail.com", revenue: 1500, avatar: "/assets/images/avatars/c2.png" },
    { name: "Teeblix", email: "teeblix@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c3.png" },
    { name: "Freddie Cooper", email: "freddiecooper@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c4.png" },
    { name: "Avosuahi", email: "avodesigns@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c5.png" },
    { name: "Ajide Victor", email: "ajidevictor@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c6.png" },
    { name: "Favour Thomas", email: "favourthomas@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c7.png" },
    { name: "Rare Diamond", email: "rarediamond@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c8.png" },
    { name: "Timothy", email: "timxdesign@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c9.png" },
    { name: "Victor Almondo", email: "takeout@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c10.png" },
    { name: "Josh", email: "joshdesigner@gmail.com", revenue: 1200, avatar: "/assets/images/avatars/c11.png" },
  ];

  return (
    <div className="container-fluid mt-4 wow fadeInUp" data-wow-delay="0.12s">
        <div className="card w-100 rounded-4 dashboard">
            <div className="card-body px-0">
                <div className="d-flex align-items-center padd px-3 pb-3 justify-content-between mb-3 border-bottom">
                    <div className="card-head border-bottom-0 pb-0 d-flex align-items-center">
                        <img src="/assets/images/menu.svg" width={28} className="me-2" />
                        <h5 className="title mb-0">Dashboard</h5>
                    </div> 
                    <div className="d-flex align-items-center px-3">
                          <div className="d-flex align-items-center border rounded-5 py-2 px-3 me-2">
                            <div className="d-flex align-items-center images">
                                <img src="/assets/images/avatars/d1.png" width={28} className="circle-1 rounded-circle" />
                                <img src="/assets/images/avatars/d2.png" width={28} className="circle-2 rounded-circle" />
                                <img src="/assets/images/avatars/d3.png" width={28} className="circle-3 rounded-circle" />
                             </div>
                             <p className="ms-2 text-light fw-light mb-0 ">+4</p>
                          </div>  
                          <div className="d-flex align-items-center border rounded-2 py-2 px-3">
                            <div className="d-flex align-items-center images">
                                <img src="/assets/images/box.svg" width={24} className="" />
                             </div>
                             <p className="ms-2 text-light fw-light mb-0 ">Add</p>
                          </div>
                          <div className="images">
                            <img src="/assets/images/more.svg" width={24} className="ms-2" />
                          </div>  
                    </div>
                </div> 
                <div className="px-3">
                    <div className="row">
                    {/* Left Section */}
                    <div className="col-12 col-lg-8">
                        <div className="row h-100-">
                        <div className="col-md-6 mb-4">
                            <div className="card card-border text-white h-100 ">
                                <div className="card-head">
                                     <h5 className="title">User Signups</h5>
                                </div>  
                                <div className="card-body">
                                    <Line data={userSignupsData} options={chartOptions} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card card-border text-white ">
                                <div className="card-head">
                                    <h5 className="title">Revenue by City</h5>
                                </div>  
                                <div className="card-body">
                                    <div className="mx-auto" style={{ width: "95%"}}>
                                    <Doughnut data={revenueData} options={doughnutChartOptions} plugins={[doughnutCenterPlugin]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-m-4 h-100-">
                            <div className="card card-border text-white ">
                                <div className="card-head">
                                    <h5 className="title">Number of Orders by City</h5>
                                </div>  
                                <div className="card-body bar">
                                    <Bar data={ordersData} options={chartOptions} />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="card card-border text-white h-100">
                            <div className="card-body py-0 ps-0 pe-0">
                                <div className="card-head px-3 d-flex align-items-center">
                                    <h5 className="title mb-0">Top Customers</h5>
                                    <button className="btn btn-primary btn-sm d-flex align-items-center rounded-5 py-2  px-1 ms-auto">
                                        View All
                                    </button>
                                </div> 
                                <div className="d-flex flex-column gap-3 customers">
                                    <div className="border-bottom mb-2"> 
                                        <div className="d-flex align-items-center gap-2 p-3">
                                            <div className="flex-grow-1 text-start">
                                                <span className="mb-0">Customer</span>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-0 text-light font-13">Total Spending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-1 customers">
                                    <Skeleton loading={isLoading} active>
                                     {topCustomers.map((customer, index) => (
                                        <div className="border-bot hover-customer" key={index}> 
                                            <div className="d-flex align-items-center gap-3 py-2 px-3" >
                                                <img src={customer.avatar} width={28} className="rounded-circle" alt={customer.name} />
                                                <div className="flex-grow-1 text-start">
                                                    <span className="mb-0">{customer.name}</span>
                                                    <p className="mb-0">Sales: {customer.email}</p>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 text-light amount">+${customer.revenue}.00</p>
                                                </div>
                                            </div>
                                        </div>
                                     ))}
                                  </Skeleton>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>                    
            </div>
      </div>
    </div>
  );
};

export default Dashboard;
