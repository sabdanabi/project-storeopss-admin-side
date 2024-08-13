import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export function AgustusChart({statistics}) {
    return (
        <div className="h-[440px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={statistics.data}
                    margin={{right: 40}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <legend/>
                    <Bar dataKey="quantity" fill="#2762A4"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}