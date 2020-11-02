import React from 'react';
import JobSkillTablet from '../job_listings/JobSkillTablet.js';
import RemoveButton from './RemoveButton';


const FilterTablet = ({ category, skillName, removeFilter }) => {
    return (
        <div className='filter-tablet'>
            <JobSkillTablet categore={category} skillName={skillName} />
            <RemoveButton category={category} skillName={skillName} removeFilter={removeFilter} />
        </div>
    );
}

export default FilterTablet;