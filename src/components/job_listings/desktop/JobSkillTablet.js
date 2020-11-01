import React from 'react';


const JobSkillTablet = ({ categoryName, skillName }) => {

    return (
        <div className="skill-tablet" data-category={categoryName} data-skill={skillName}>
            <p>{skillName}</p>
        </div>
    )
}

export default JobSkillTablet;