import React from 'react';


const RemoveButton = ({ category, skillName, removeFilter }) => {
    return (
        <div class="remove-button" data-category={category} data-skillName={skillName} onClick={removeFilter}>
            X
        </div>
    )
}

export default RemoveButton;