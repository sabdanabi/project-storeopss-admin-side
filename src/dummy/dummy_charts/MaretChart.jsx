'use client';
import {
    ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, BarChart, Bar
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 1200,
        pv: 2200,
        amt: 3200,
    },
    {
        name: 'Page B',
        uv: 1800,
        pv: 2800,
        amt: 3800,
    },
    {
        name: 'Page C',
        uv: 2400,
        pv: 3400,
        amt: 4400,
    },
    {
        name: 'Page D',
        uv: 3000,
        pv: 4000,
        amt: 5000,
    },
    {
        name: 'Page E',
        uv: 3600,
        pv: 4600,
        amt: 5600,
    },
    {
        name: 'Page F',
        uv: 4200,
        pv: 5200,
        amt: 6200,
    },
    {
        name: 'Page G',
        uv: 4800,
        pv: 5800,
        amt: 6800,
    },
];


export default function MaretChart()  {
    return (
        <div className="h-[440px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
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