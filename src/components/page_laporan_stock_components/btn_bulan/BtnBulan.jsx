import PropTypes from "prop-types";

export default function BtnBulan(props) {
    return (
        <div
            className="hover:border-b-4 hover:border-[#1A4F8B] ml-8 group border-b-3 ">
            <button className="font-semibold group-hover:text-[#1A4F8B] text-sm text-[#8C95A4]">{props.bulan}</button>
        </div>
    )
}

BtnBulan.propTypes = {
    bulan: PropTypes.string.isRequired,
};