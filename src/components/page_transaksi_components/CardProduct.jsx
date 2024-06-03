import {useState} from "react";
import PropTypes from "prop-types";

export function CardProduct({products}) {
    const [count, setCount] = useState(1);


    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => {
        if (count > 1) setCount(count - 1);
    };
    return (
        <>{products.map((product) => (
            <div className="flex border-2 rounded-lg p-2 gap-5 mt-5" key={product.id}>
                <img src="/assets_img/img_kayu.png" alt="img produk"/>
                <div className="">
                    <p className="font-semibold text-lg">{product.name}</p>
                    <div className="flex text-xs font-medium text-[#727E91]">
                        <p className="mr-3">Harga</p>
                        <p>{product.selling_price}</p>
                    </div>
                    <div className="flex font-medium text-[#727E91]  text-xs">
                        <p className="mr-3">Stock</p>
                        <p>{product.quantity}</p>
                    </div>
                </div>
                <div className="flex  items-center ml-7">
                    <button onClick={decrementCount} className="px-2 py-1 border rounded">-
                    </button>
                    <span className="mx-4">{count}</span>
                    <button onClick={incrementCount} className="px-2 py-1 border rounded">+
                    </button>
                </div>
            </div>
        ))}
        </>
    )
}

CardProduct.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        selling_price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
};