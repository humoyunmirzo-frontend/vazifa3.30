import React from 'react';
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

const labels = ['a', 'b', 'c', 'd',];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [1,5,3,10],
      backgroundColor: ['#FABE7A', '#F6866A','#59E6F6', '#7661E2'],
    }
  ],
};

export function TeamsChart() {
  return <Bar  data={data} />;
}
