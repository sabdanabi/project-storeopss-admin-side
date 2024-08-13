'use client';
import {
    ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, BarChart, Bar
} from 'recharts';


export default function JanuariChart()  {
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
                   <Bar dataKey="quantity" fill="#2762A4"/>
               </BarChart>
           </ResponsiveContainer>
       </div>
    );
}