import React from 'react';


const JobSkillTablet = ({ categoryName, skillName, selectFilter }) => {

    return (
        <div className="skill-tablet" data-category={categoryName} data-skillName={skillName} onClick={selectFilter}>
            <span data-category={categoryName} data-skillName={skillName}>{skillName}</span>
        </div>
    )
}

export default JobSkillTablet;