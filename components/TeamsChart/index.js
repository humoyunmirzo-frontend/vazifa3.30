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



export function TeamsChart({ info }) {
  const [labels, setLabels] = useState([])
  const [numbers, setNumbers] = useState([])
    useEffect(() => {
    //   async function getData() {
    //     const res = await getTeamsStrength()
    // setLabels(res.labels)
    // setNumbers(res.data)
    //   }
    //   getData()
    setLabels(info.labels)
    setNumbers(info.data)
    console.log(info)
    }, [])
  // console.log(data);
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: numbers,
        backgroundColor: ['#FABE7A', '#F6866A', '#59E6F6', '#7661E2'],
      }
    ],
  };
  return <Bar data={data} />;
}
export async function getStaticProps() {
  const res = await getTeamsStrength()
  return {
    props: { info: res }
  }
}