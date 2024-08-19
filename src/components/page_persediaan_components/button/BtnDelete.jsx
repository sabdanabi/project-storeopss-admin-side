import PropTypes from "prop-types";

export function BtnDelete({id, handleDelete}) {
    return <button
        onClick={() => handleDelete(id)}
        className="text-[10px] border-2 border-[#2F5F94] h-[33px] w-[58px] rounded-lg font-semibold">
        Hapus Produk
    </button>
}

BtnDelete.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number]).isRequired,
    handleDelete: PropTypes.func.isRequired,
};