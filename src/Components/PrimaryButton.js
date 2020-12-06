import React from 'react'

const PrimaryButton = props => {
    return <button type="button" className={props.size === "big" ? "btn btn-primary no-focus big" : "btn btn-primary no-focus small"}>{props.content}</button>
}

export default PrimaryButton
