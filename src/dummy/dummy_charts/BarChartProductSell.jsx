import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import PropTypes from "prop-types";

export function BarChartProductSell({ data }) {
    const chartData = data.map(product => ({
        name: product.name,
        quantity: product.quantity
    }));

    // Function to truncate long names and add ellipsis
    const truncateLabel = (label) => {
        const words = label.split(' ');
        if (words.length > 2) {
            return words.slice(0, 2).join(' ') + '...';
        }
        return label;
    };

    return (
        <div className="h-[370px] w-full">
            <ResponsiveContainer>
                <LineChart data={chartData} margin={{ top: 5, right: 30, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        className="text-xs"
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        interval={0}
                        dy={10} // Adjust as needed
                        tickFormatter={truncateLabel} // Apply label truncation
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

BarChartProductSell.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
};
