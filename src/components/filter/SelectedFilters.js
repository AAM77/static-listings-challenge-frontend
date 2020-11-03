import React from 'react';
import ClearButton from './ClearButton';
import FilterTablet from './FilterTablet';


const SelectedFilters = ({ selectedFilters, isFilters, removeFilter, clearFilters }) => {

    const addFilterTablets = () => {
        /*
        Mohammad Adeel - November 1, 2020
        Uses the list of distinct/unique selectedFilters from this.getDistinctSelectedFilters
        to create and return a list of FilterTablet components, which get added to the SelectedFilters
        component.
        */
        return selectedFilters.map( (selectedFilter, index) => (
            <FilterTablet 
                key={`${selectedFilter.skillName}${index}`} 
                category={selectedFilter.category} 
                skillName={selectedFilter.skillName} 
                removeFilter={removeFilter} 
            />
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