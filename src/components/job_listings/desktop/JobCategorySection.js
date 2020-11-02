import React from 'react';
import JobSkillTablet from './JobSkillTablet';


const JobCategorySection = ({ jobListing, selectFilter }) => {
    // Loop through the keys (Object.entries(jobListing)).
    // If the keys are in the list ['role', 'level', 'languages', 'tools']
        // If the key is languages or tools:
            // iterate through the array and create a JobSkillTablet for it and pass in the array item as the prop
        // else create a JobSkillTablet for it with the key as the prop.

    const getSkillList = () => {
        const skillList = [];

        Object.entries(jobListing).forEach( ([category, skillSet]) => {
            const categories = ['role', 'level', 'languages', 'tools'];
            if (categories.includes(category)) {
                if (category === 'languages' || category === 'tools') {
                    skillSet.forEach( (skillName) => {
                        // NOTE: Mohammad Adeel - November 1, 2020. Use an object instead of a 'tuple.'
                        skillList.push([category, skillName]);
                    })
                }
                else {
                    skillList.push([category, skillSet]);
                }
            }
        });

        return skillList;
    }

    const createJobSkillTablets = () => {
        // NOTE: Need to make keys unique.
        return getSkillList().map( (skillTuple, index) => {
            return <JobSkillTablet key={index} categoryName={skillTuple[0]} skillName={skillTuple[1]} selectFilter={selectFilter} />
        })
    }

    return (
        <div className='category-section'>
            {createJobSkillTablets()}
        </div>
    )
}

export default JobCategorySection;