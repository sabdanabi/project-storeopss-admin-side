import PropTypes from 'prop-types';
import BtnRestockProduk from "./button/BtnRestockProduk.jsx";
import BtnEditPorduk from "./button/BtnEditPorduk.jsx";
import { BtnDeleteNew } from "./button/BtnDeleteNew.jsx";

export default function TblProductStock({ products, handleDelete, refreshProducts, pagination }) {
    const { current_page, per_page } = pagination || {};


    return (
        <div className="bg-white flex border-b-[3px] border-gray-200 overflow-auto h-80">
            <table className="w-full h-10">
                <thead className="h-10 border-b-2">
                <tr className="text-sm text-[#9CA4AE]">
                    <td className="px-4">No</td>
                    <td>Produk</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sort-icon" /></td>
                    <td>Harga Beli<span className="text-[11px]">(Satuan)</span></td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon" /></td>
                    <td>Harga Jual<span className="text-[11px]">(Satuan)</span></td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon" /></td>
                    <td>Stock</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-5" alt="sort-icon" /></td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody className="font-semibold text-blue-gray-700">
                {products.map((product, index) => (
                    <tr className="border-b-2  text-[15px]" key={product.id}>
                        <td className="px-4">
                            <p className="mr-3 text-blue-gray-700">
                                {(current_page - 1) * per_page + index + 1}
                            </p>
                        </td>
                        <td>
                            <div className="flex py-3">
                                {/* <img src={product.image ? product.image : "/assets_img/placeholder_image.jpg"} className="h-12 mr-3" alt="product-image" /> */}
                                <p className="mr-24">{product.name}</p>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            {(product.purchase_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                        </td>
                        <td></td>
                        <td>
                            {(product.selling_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                        </td>
                        <td></td>
                        <td>{product.quantity ?? 0}</td>
                        <td></td>
                        <td>
                            <div className="flex gap-4 items-center">
                                <BtnRestockProduk id={product.id} refreshProductss={refreshProducts} />
                                <BtnEditPorduk id={product.id} updateProductsState={refreshProducts} />
                                <BtnDeleteNew handleDelete={handleDelete} id={product.id} />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

TblProductStock.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        purchase_price: PropTypes.number,
        selling_price: PropTypes.number,
        quantity: PropTypes.number,
    })),
    handleDelete: PropTypes.func,
    refreshProducts: PropTypes.func,
    pagination: PropTypes.shape({
        current_page: PropTypes.number,
        per_page: PropTypes.number,
    }),
};
