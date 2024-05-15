'use client';
import {
    ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, BarChart, Bar
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 1000,
        pv: 2000,
        amt: 3000,
    },
    {
        name: 'Page B',
        uv: 1500,
        pv: 2500,
        amt: 3500,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 3000,
        amt: 4000,
    },
    {
        name: 'Page D',
        uv: 2500,
        pv: 3500,
        amt: 4500,
    },
    {
        name: 'Page E',
        uv: 3000,
        pv: 4000,
        amt: 5000,
    },
    {
        name: 'Page F',
        uv: 3500,
        pv: 4500,
        amt: 5500,
    },
    {
        name: 'Page G',
        uv: 4000,
        pv: 5000,
        amt: 6000,
    },
];

export default function FebruariChart()  {
    return (
        <div className="h-[440px] w-full" >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{right: 40}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <legend/>
                    <Bar dataKey="amt" fill="#2762A4"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}