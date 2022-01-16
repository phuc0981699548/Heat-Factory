import React from 'react'
import PropTypes from 'prop-types'

const PolicyCart = props => {
    return (
        <div className="rounded-md p-4 text-center border-2 hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <div className="">
                <i className={props.icon}></i>
            </div>
            <div className="">
                <div className="text-red-600 font-medium ">
                    {props.name}
                </div>
                <div className="text-black">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

PolicyCart.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default PolicyCart
