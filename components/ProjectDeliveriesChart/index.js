import React, { useEffect, useState } from 'react';
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
import { getDashboardInfo } from '@/api';

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
            max: 12,
        },
    },
}

export function ProjectDeliveriesChart() {
    const [labels, setLabels] = useState([])
    const [numbers, setNumbers] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await getDashboardInfo()
            setLabels(res.projectDeliveries.labels)
            setNumbers(res.projectDeliveries.data)
        }
        getData()
        console.log();
    }, [])
    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: numbers[0],
                borderColor: '#FB896B',
                backgroundColor: '#FB896B',
                tension: 0.9
            },
            {
                label: '',
                data: numbers[1],
                borderColor: "#6956E5",
                backgroundColor: '#6956E5',
                tension: 0.9
            },
        ],
    };
    return <Line options={options} data={data} />;
}
