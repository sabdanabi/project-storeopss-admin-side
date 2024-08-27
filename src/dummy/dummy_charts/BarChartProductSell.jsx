import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import PropTypes from "prop-types";

export function BarChartProductSell({data}) {

    const chartData = data.map(product => ({
        name: product.name,
        quantity: product.quantity
    }));

    const customTooltipFormatter = (value, name,) => {
        return [`${value} Produk Terjual`, name];
    };

    return (
        <div className="h-[390px] w-full">
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{right: 40}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" fontSize="10px" tickFormatter={(value) => value.length > 10 ? `${value.substring(0, 10)}...` : value} />
                    <YAxis/>
                    <Tooltip formatter={customTooltipFormatter} />
                    <legend/>
                    <Bar dataKey="quantity" fill="#2762A4" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
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