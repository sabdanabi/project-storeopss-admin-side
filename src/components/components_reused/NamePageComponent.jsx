import PropTypes from "prop-types";
export default function NamePageComponent(props) {
    return (
        <div className="flex items-center justify-between h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">{props.nama}</h1>
        </div>
    );
}

NamePageComponent.propTypes = {
    nama: PropTypes.string.isRequired,
};
