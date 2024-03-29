import React from 'react'
import MiniCardSection8 from './MiniCardSection8';

// Icons
import {
    FcCalendar,
    FcWorkflow,
    FcCustomerSupport,
    FcComboChart
} from "react-icons/fc";

function CardsSection8(props) {
    const checkIcon = (name) => {
        switch (name) {
            case 'year':
                return <FcCalendar className='w-20 h-20' />
            case 'work':
                return <FcWorkflow className='w-20 h-20' />
            case 'customer':
                return <FcCustomerSupport className='w-20 h-20' />
            case 'product':
                return <FcComboChart className='w-20 h-20' />
        }
    }
    return (
        <div className="p-4 w-full">
            <div className="h-[28vh] md:h-auto border-2 border-gray-200 flex flex-col  items-center px-4 py-6 rounded-lg shadow-lg transition ease-in-out delay-150  md:hover:-translate-y-1 md:hover:scale-110 hover:bg-gray-50 duration-150 ">
                <div>{checkIcon(props.name)}</div>
                <h2 className="title-font font-medium text-2xl md:text-3xl text-gray-900">
                    <MiniCardSection8 id={props.id} num={props.num} duration={props.duration} />
                </h2>
                <p className="leading-relaxed">{props.desc}</p>
            </div>
        </div>
    )
}
export default CardsSection8;
