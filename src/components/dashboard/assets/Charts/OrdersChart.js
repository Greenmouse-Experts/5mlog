import React from "react";
import ReactApexChart from "react-apexcharts";

export default function OrdersChart({chartData}) {
    
    const options = { labels: ["Completed", "Ongoing", "Cancelled"],responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }] };
const series = [chartData ? chartData.completed_order : 0, chartData ? chartData.ongoing_order : 0, 0,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="pie" width="100%" />
  </div>
);
  }