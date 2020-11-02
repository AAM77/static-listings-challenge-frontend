import React from 'react';


const ClearButton = ({ clearFilters }) => {
    return (
        <span class="clear-button" onClick={clearFilters}>
            <span>Clear</span>
        </span>
    );
}

export default ClearButton;