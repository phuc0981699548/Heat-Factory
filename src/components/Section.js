import React from 'react'

const Section = (props) => {
    return (
        <div className="my-20">
            {props.children}
        </div>
    )
}

const SectionTitle = (props) => {
    return (
        <div className="capitalize text-center mb-20 font-medium text-xl">
            {props.children}
        </div>
    )
}

const SectionBody = (props) => {
    return (
        <div className="">
            {props.children}
        </div>
    )
}

export { SectionTitle, SectionBody } 

export default Section
