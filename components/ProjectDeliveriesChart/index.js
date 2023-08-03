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
import { getDashboardInfo, getProjectDeliveries } from '@/api';

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
    const [labels, setLabels] = useState()
    const [numbers1, setNumbers1] = useState()
    const [numbers2, setNumbers2] = useState()
    useEffect(() => {
        async function getData(){
            const res = await getProjectDeliveries()
            setLabels(res.labels)
            setNumbers1(res.data1)
            setNumbers2(res.data2)
        }
        getData()
    }, [])
    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: numbers1,
                borderColor: '#FB896B',
                backgroundColor: '#FB896B',
                tension: 0.9
            },
            {
                label: '',
                data: numbers2,
                borderColor: "#6956E5",
                backgroundColor: '#6956E5',
                tension: 0.9
            },
        ],
    };
    return <Line options={options} data={data} />;
}
