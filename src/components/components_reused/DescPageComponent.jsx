import PropTypes from "prop-types";

export default function DescPageComponent(props) {
    return (
        <div className="h-10 w-[100%] flex pt-2 pl-3 bg-[#F5F7F9] ">
            <img src="/assets_img/img_blue_elipse.png" className="h-5 mr-3"/>
            <p className="text-sm text-gray-600">{props.desc}</p>
        </div>
    )
}

DescPageComponent.propTypes = {
    desc: PropTypes.string.isRequired,
};