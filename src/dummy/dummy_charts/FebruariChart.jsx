'use client';
import {
    ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, BarChart, Bar
} from 'recharts';

const data = [
    {
        name: 'Page A',
        amt: 100,
    },
    {
        name: 'Page B',
        amt: 20,
    },
    {
        name: 'Page C',
        amt: 10,
    },
    {
        name: 'Page D',
        amt: 50,
    },
    {
        name: 'Page E',
        amt: 300,
    },
    {
        name: 'Page F',
        amt: 50,
    },
    {
        name: 'Page G',
        amt: 200,
    },
];

export default function FebruariChart()  {
    return (
        <div className="h-[440px] w-full" >
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