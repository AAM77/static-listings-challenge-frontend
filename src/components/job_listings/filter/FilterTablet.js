import React from 'react';
import JobSkillTablet from '../desktop/JobSkillTablet.js';
import RemoveButton from './RemoveButton';


const FilterTablet = ({ category, skillName, removeFilter }) => {
    return (
        <div class='filter-tablet'>
            <JobSkillTablet categore={category} skillName={skillName} />
            <RemoveButton category={category} skillName={skillName} removeFilter={removeFilter} />
        </div>
    );
}

export default FilterTablet;