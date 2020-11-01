import React, { Component } from 'react';
import ClearButton from './ClearButton';
import FilterTablet from './FilterTablet';


class SelectedFilters extends Component {
    state = {
        selectedFilters: [
            {category:'tools', skillName: 'React'}, 
            {category: 'role', skillName: 'Fullstack'}, 
            {category:'tools', skillName: 'React'}, 
            {category: 'role', skillName: 'Fullstack'}, 
            {category:'tools', skillName: 'React'}, 
            {category: 'role', skillName: 'Fullstack'},
            {category: 'something', skillName: 'Python'}
        ]   // NOTE: Currently has mock data for building out the UI and testing behavior.
            // Should be an array of objects that contain both the category and the skill name.
    }

    getDistinctSelectedFilters = () => {
        /*
        Mohammad Adeel - November 1, 2020
        Uses the selectedFilters from the state to return a list of unique filter selections.
        This is useful for preventing (1) unnecessary calculations and processing, & (2) duplicate
        entries from displaying in the SelectedFilters component.
        */
        const distinctSelectedFilters = [];
        const mappedFilters = new Map();
        for (const selectedFilter of this.state.selectedFilters) {
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

    addFilterTablets = () => {
        /*
        Mohammad Adeel - November 1, 2020
        Uses the list of distinct/unique selectedFilters from this.getDistinctSelectedFilters
        to create and return a list of FilterTablet components, which get added to the SelectedFilters
        component.
        */
        return this.getDistinctSelectedFilters().map( (selectedFilter, index) => (
            <FilterTablet key={index} category={selectedFilter.category} skillName={selectedFilter.skillName} />
        ))
    }

    render() {
        return (
            <div className="container">
                <div className="card filter-display-card shadow">
                    <div className='selected-filters'>
                        {this.addFilterTablets()}
                    </div>
                    <ClearButton />
                </div>
                
            </div>
        );
    }
}

export default SelectedFilters;