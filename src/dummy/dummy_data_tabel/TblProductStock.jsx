import PropTypes from 'prop-types';
import BtnRestockProduk from "../../components/page_persediaan_components/button/BtnRestockProduk.jsx";
import BtnEditPorduk from "../../components/page_persediaan_components/button/BtnEditPorduk.jsx";
import { BtnDeleteNew } from "../../components/page_persediaan_components/button/BtnDeleteNew.jsx";

export default function TblProductStock({ products, handleDelete, updateProductState, pagination }) {

    // Set default values for pagination if undefined
    const { current_page = 1, per_page = 10 } = pagination || {};

    return (
        <div className="bg-white flex border-b-[3px] border-gray-200 overflow-auto h-80">
            <table className="w-full">
                <thead className="h-10 border-b-2">
                <tr className="text-sm text-[#9CA4AE]">
                    <td className="px-4">No</td>
                    <td>Produk</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sort-icon" /></td>
                    <td>Harga Beli</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon" /></td>
                    <td>Harga Jual</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon" /></td>
                    <td>Stock</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-5" alt="sort-icon" /></td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody className="font-semibold text-blue-gray-700">
                {products.map((product, index) => (
                    <tr className="border-b-2 h-13 text-xs" key={product.id}>
                        <td className="px-4"><p className="mr-3">{(current_page - 1) * per_page + index + 1}</p></td>
                        <td>
                            <div className="flex py-3">
                                {/*<img src={product.image ? product.image : "/assets_img/placeholder_image.jpg"} className="h-12 mr-3" alt="product-image" />*/}
                                <p className="mr-24">{product.name}</p>
                            </div>
                        </td>
                        <td></td>
                        <td>{product.purchase_price ? (product.purchase_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) : 'N/A'}</td>
                        <td></td>
                        <td>{product.selling_price ? (product.selling_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) : 'N/A'}</td>
                        <td></td>
                        <td>{product.quantity ?? 0}</td>
                        <td></td>
                        <td>
                            <div className="flex gap-4 items-center">
                                <BtnRestockProduk id={product.id} updateProductsState={updateProductState} />
                                <BtnEditPorduk id={product.id} updateProductsState={updateProductState} />
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
        id: PropTypes.number.isRequired,
        // image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        purchase_price: PropTypes.number,
        selling_price: PropTypes.number,
        quantity: PropTypes.number,
    })).isRequired,
    handleDelete: PropTypes.func.isRequired,
    updateProductState: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
        current_page: PropTypes.number,
        per_page: PropTypes.number,
    }),
};
