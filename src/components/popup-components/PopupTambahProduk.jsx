import PropTypes from "prop-types";

export default function PopupTambahProduk({open,onClose,children}) {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors 
                ${open ? "visible bg-black/20" : "invisible"}`}>
            <div className={`bg-white rounded-xl shadow p-6 transition-all 
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
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