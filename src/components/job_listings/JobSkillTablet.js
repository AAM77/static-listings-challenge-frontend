import React from 'react';


const JobSkillTablet = ({ category, skillName, selectFilter }) => {

    return (
        <div className="skill-tablet" data-category={category} data-skillname={skillName} onClick={selectFilter}>
            <span data-category={category} data-skillname={skillName}>{skillName}</span>
        </div>
    )
}

export default JobSkillTablet;