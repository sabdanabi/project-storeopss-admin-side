import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";

export default function TabsPageStatistic({item, setSelectedTab}) {
    const firstBtnRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);


    useEffect(() => {
        if (firstBtnRef.current) {
            firstBtnRef.current.focus();
        }
    }, []);

    const handleTabClick = (index) => {
        setSelectedTab(index);
        setActiveTab(index);
    };
    return(
        <div className="bg-white h-[65px] flex pt-5 border-y-[3px] border-gray-200 justify-between">
            <div className="flex">

                <div>
                    {item.map((item, index) => (
                        <button
                            className={`font-medium text-[16px] text-sm text-[#8C95A4] mr-5 ml-5 outline-none
                                ${activeTab === index ? 'text-light-blue-900' : 'hover:text hover:text-light-blue-900 focus:outline-none'}`}
                            key={index}
                            ref={index === 0 ? firstBtnRef : null}
                            onClick={() => handleTabClick(index)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 mb-10 mr-7 text-[#8C95A4]">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                </svg>
            </button>
        </div>
    )
}

TabsPageStatistic.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
    })).isRequired,
    setSelectedTab: PropTypes.func.isRequired, // Adding validation for setSelectedTab
};