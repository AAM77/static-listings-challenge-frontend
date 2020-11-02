import React from 'react';
import ClearButton from './ClearButton';
import FilterTablet from './FilterTablet';


const SelectedFilters = ({ selectedFilters, isFilters, removeFilter, clearFilters }) => {

    const getDistinctSelectedFilters = () => {
        /*
        Mohammad Adeel - November 1, 2020
        Uses the selectedFilters from the state to return a list of unique filter selections.
        This is useful for preventing (1) unnecessary calculations and processing, & (2) duplicate
        entries from displaying in the SelectedFilters component.
        */
        const distinctSelectedFilters = [];
        const mappedFilters = new Map();
        for (const selectedFilter of selectedFilters) {
            if(!mappedFilters.has(selectedFilter.skillName)){
                mappedFilters.set(selectedFilter.skillName, true);    // set any value to Map
                distinctSelectedFilters.push({
                    category: selectedFilter.category,
                    skillName: selectedFilter.skillName
                });
            }
        }

        return distinctSelectedFilters;
    }

    const addFilterTablets = () => {
        /*
        Mohammad Adeel - November 1, 2020
        Uses the list of distinct/unique selectedFilters from this.getDistinctSelectedFilters
        to create and return a list of FilterTablet components, which get added to the SelectedFilters
        component.
        */
        return getDistinctSelectedFilters().map( (selectedFilter, index) => (
            <FilterTablet key={index} category={selectedFilter.category} skillName={selectedFilter.skillName} removeFilter={removeFilter} />
        ))
    }

    return (
        /* Mohammad Adeel - November 1, 2020. Using the 'display' style attribute instead of 'visibility'
        so that it treats a hidden element as if it does not exist. This way, the layout of the 
        remaining elements adjusts accordingly, depending on whether it is hidden or not. */
        <div id='selected-filters-container' className={`container ${isFilters ? '' : 'hidden'}` }>
            <div className="card filter-display-card shadow">
                <div className='selected-filters'>
                    {addFilterTablets()}
                </div>
                <ClearButton clearFilters={clearFilters} />
            </div>
            
        </div>
    );
}

export default SelectedFilters;