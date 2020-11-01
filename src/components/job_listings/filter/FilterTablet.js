import React from 'react';
import JobListingTag from '../desktop/JobListingTag.js';
import JobSkillTablet from '../desktop/JobSkillTablet.js';
import RemoveButton from './RemoveButton';


const FilterTablet = ({ skillName }) => {
    return (
        <div class='filter-tablet'>
            <JobSkillTablet skillName={skillName} />
            <RemoveButton skillName={skillName} />
        </div>
    );
}

export default FilterTablet;