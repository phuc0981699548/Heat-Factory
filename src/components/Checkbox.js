import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
    
    const inputRef = useRef(null)

    const onChange = () => {
        if(props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <label className="flex gap-2 items-center cursor-pointer mb-1 text-gray-500 hover:text-blue-500">
            <input 
                type="checkbox" 
                ref={inputRef} 
                onChange={onChange} 
                checked={props.checked}
                className=""
            />
            {props.label}
        </label>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
}

export default Checkbox
