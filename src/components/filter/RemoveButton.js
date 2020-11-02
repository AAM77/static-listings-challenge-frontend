import React from 'react';


const RemoveButton = ({ category, skillName, removeFilter }) => {
    return (
        <div className="remove-button" data-category={category} data-skillname={skillName} onClick={removeFilter}>
            X
        </div>
    )
}

export default RemoveButton;