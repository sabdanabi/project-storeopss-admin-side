import PropTypes from "prop-types";

export default function PopupTambahProduk({open,onClose,children}) {
    return (
        <div onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors 
                ${open ? "visible bg-black/20" : "invisible"}`}>
            <div className={`bg-white rounded-xl shadow p-8 transition-all 
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-[850px] h-[620px]`}>
                <p className="font-semibold text-2xl mb-7">Penjualan</p>
                <p className="font-medium mb-3">Pilih Produk</p>
                <button className="border-2 text-[#8C95A4] mb-7 text-center p-2 text-xs rounded-lg">Pilih Produk</button>
                <div className="h-7 border-b-2 border-gray-300"></div>
                <div>
                    <div>
                        <p className="font-medium">Tanggal</p>
                        <input
                            type="text"
                            placeholder="Cari Produk"
                            className="border-none focus:ring-0 p-2 rounded-l-lg shadow"
                        />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

PopupTambahProduk.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};