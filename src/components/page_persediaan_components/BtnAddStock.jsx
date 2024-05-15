import PropTypes from "prop-types";

export default function BtnAddStock({setOpen, titlePage, titleBtn}) {

    return (
        <>
            <div className="flex items-center justify-between h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-900">{titlePage}</h1>
                <button className="flex items-center px-4 py-2 bg-[#1A4F8B] group
                    rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2"
                        onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 mr-2 text-white group-hover:text-[#1A4F8B]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                    <span className="text-white font-semibold group-hover:text-[#1A4F8B]">{titleBtn}</span>
                </button>
            </div>


        </>
    )
}

BtnAddStock.propTypes = {
    setOpen: PropTypes.bool.isRequired,
    titlePage: PropTypes.func.isRequired,
    titleBtn: PropTypes.node.isRequired,
};