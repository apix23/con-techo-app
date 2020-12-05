import React from 'react'
import FilterItem from './Components/FilterItem'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import PrimaryButton from './Components/PrimaryButton'
import SecondaryOrangeButton from './Components/SecondaryOrangeButton'
import SecondaryOutlineButton from './Components/SecondaryOutlineButton'

const AllComponents = () => {
    return (
        <div>
            <h1>This is an H1</h1>
            <h2>This is an H2</h2>
            <p>This is a Regular Text&gt;</p>

            <h1>Header: </h1>
            <Header />
            
            <h1>Primary Buttons: </h1>
            <div className="row">
                <p>&lt;PrimaryButton size="big" content="Big button"&gt;</p>
                <PrimaryButton size="big" content="Big Button" />
            </div>
            <br/>
            <div className="row">
                <p>&lt;PrimaryButton size="small" content="Small Button"&gt;</p>
                <PrimaryButton size="small" content="Small Button" />
            </div>

            <h1>Secondary Buttons:</h1>
            <div className="row">
                <div className="col">
                    <p>&lt;SecondaryOrangeButton size="small" content="Secondary orange"&gt;</p>
                    <SecondaryOrangeButton content="Secondary orange" />
                </div>
                <div className="col">
                    <p>&lt;SecondaryOutlineButton size="small" content="Secondary outline"&gt;</p>
                    <SecondaryOutlineButton content="Secondary outline" />
                </div>
            </div>

            <h1>Pagination:</h1>
            <p>&lt;Pagination numberOfPages=10 activePage=4&gt;</p>
            <Pagination numberOfPages={10} activePage={4}/>

            <h1>Filters</h1>
            <p>&lt;FilterItem filterName="Barcelona" filterOptions=['Barcelona','Madrid', 'Sevilla']</p>
            <FilterItem filterName="Barcelona" filterOptions ={['Valencia', 'Madrid', 'Sevilla']} />
        </div>
    )
}

export default AllComponents
