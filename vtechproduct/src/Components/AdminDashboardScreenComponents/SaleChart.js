import React,{useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
    title: {
      display: true,
      text: 'Sales Chart',
      align:'start',
      font:{
        size:24,
        color:'#ff9f40'
      }
    },
  },
};
const labels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,5,10,15,10,20,20],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data:  [5,10,15,10,20,10,15],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const SaleChart = () => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center m-0 px-5 p-3 border border-0 border-danger' style={{width:'100%',height:'30rem'}}>
       <Line options={options} data={data} />;
     
    </div>
  )
}

export default SaleChart