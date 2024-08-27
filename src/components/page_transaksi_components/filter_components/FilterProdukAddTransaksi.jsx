import PropTypes from "prop-types";

export function FilterProdukAddTransaksi({ searchQuery, handleSearchChange }) {
    return (
        <>
            <div className="w-[400px]">
                <input
                    type="text"
                    placeholder="Cari Produk"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-full"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-5 h-5 absolute top-5 left-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
            </div>
        </>
    )
}

FilterProdukAddTransaksi.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
};