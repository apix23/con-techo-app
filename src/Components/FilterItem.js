import React from 'react'

const FilterItem = props => {
    const filterName = props.filterName;
    const filterOptions = props.filterOptions;

    return (
        <select>
            <option value={filterName} selected>{filterName}</option>
            {
                filterOptions.map(option => <option value={option}>{option}</option>)
            }
        </select>
    )
}

export default FilterItem
