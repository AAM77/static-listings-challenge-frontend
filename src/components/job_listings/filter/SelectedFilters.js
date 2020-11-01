import React, { Component } from 'react';
import ClearButton from './ClearButton';


class SelectedFilters extends Component {
    state = {
        filterOptions: []
    }

    render() {
        return (
            <div className="container">
                <div className="card selected-filters shadow">
                    <ClearButton />
                </div>
                
            </div>
        );
    }
}

export default SelectedFilters;