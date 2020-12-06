import React from 'react'
import PrimaryButton from './PrimaryButton'
import checkmark from './../images/checkmark-icon.png'

const CheckmarksCard = ({image, title, items, buttonText}) => {
    return (
        <div class="card checkmarks-card">
            <img class="card-img-top" src={image} alt="Card image cap" />
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                {
                    items.map(item => <p><img src={checkmark} alt="checkmark icon"/> {item} </p>)
                }
                <PrimaryButton size="small" content={buttonText} />
            </div>
        </div>
    )
}

export default CheckmarksCard
