import PropTypes from "prop-types";
export default function NamePageComponent(props) {
    return (
        <div className="flex items-center h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-700">{props.nama}</h1>
            <h6 className="text-[15px] font-regular text-gray-500 ml-4 mt-2">{props.subtitle}</h6>
        </div>
    );
}

NamePageComponent.propTypes = {
    nama: PropTypes.string.isRequired,
};
