import React from 'react';


const RemoveButton = ({ skillName }) => {
    return (
        <div class="remove-button" data-skill={skillName}>
            X
        </div>
    )
}

export default RemoveButton;