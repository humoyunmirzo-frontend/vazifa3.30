import React from 'react';
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

const options = {
    scales: {
        y: {
            max:12,
        },
    },
}
const labels = ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2021', 'Feb 2021', 'Mar 2021',];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [6, 7, 6.5, 4.5, 7.9, 5.9, 6.5, 6],
            borderColor: '#FB896B',
            backgroundColor: '#FB896B',
            tension:0.9
        },
        {
            label: '',
            data: [3.9, 3.5, 6, 5.8, 3.5, 4.5, 4.8, 6.3, 5.5, 5.8, 5],
            borderColor: "#6956E5",
            backgroundColor: '#6956E5',
            tension:0.9
        },
    ],
};

export function ProjectDeliveriesChart() {
    return <Line options={options} data={data} />;
}
