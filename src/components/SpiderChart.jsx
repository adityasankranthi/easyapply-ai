// src/components/SpiderChart.jsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SpiderChart = () => {
  const data = {
    labels: ['Keywords', 'Format', 'Relevance', 'Clarity'],
    datasets: [{
      label: 'Resume Score',
      data: [90, 85, 75, 80],
      backgroundColor: 'rgba(244, 114, 182, 0.4)',
      borderColor: '#f472b6',
      borderWidth: 2,
      pointBackgroundColor: '#f4f4f5',
      pointBorderColor: '#f472b6',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(244, 244, 245, 0.2)' },
        grid: { color: 'rgba(244, 244, 245, 0.2)' },
        pointLabels: {
          color: '#a1a1aa',
          font: { size: 11 }
        },
        ticks: {
          display: false,
          beginAtZero: true,
          max: 100,
          stepSize: 25
        }
      }
    }
  };

  return <Radar data={data} options={options} />;
};

export default SpiderChart;