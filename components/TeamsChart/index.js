import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getTeamsStrength } from '@/api';
import { teamsStrength } from '@/data/dashboardTeams';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
export default function TeamsChart({ labels,numbers }) {
  const info = {
    labels,
    datasets: [
      {
        label: '',
        data: numbers,
        backgroundColor: ['#FABE7A', '#F6866A', '#59E6F6', '#7661E2'],
      }
    ],
  };
  return <Bar data={info} />;
}