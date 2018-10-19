import React from "react";
import "../styles/Navbar.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const data = [
    { name: 'Sunday', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Monday', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Tuesday', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Wednesday', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Thursday', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Friday', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Saturday', uv: 3490, pv: 4300, amt: 2100 },
];

export default class Chart extends React.Component{
    render() {
        return (
            <LineChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        );
    }
}


