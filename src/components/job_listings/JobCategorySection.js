import React from 'react';
import JobSkillTablet from './JobSkillTablet';


const JobCategorySection = ({ jobListing, selectFilter }) => {
   
    const getSkillList = () => {
        /* Mohammad Adeel - November 3, 2020.
        Dynamically retrieve and output a list/array of
        all of the skill names and the categories they belong to.
        Used to create JobSkillTablet components.
        */
        const skillList = [];

        Object.entries(jobListing).forEach( ([category, skillSet]) => {
            const categories = ['role', 'level', 'languages', 'tools'];
            if (categories.includes(category)) {
                if (category === 'languages' || category === 'tools') {
                    skillSet.forEach( (skillName) => {
                        skillList.push({category: category, skillName: skillName});
                    })
                }
                else {
                    skillList.push({category: category, skillName: skillSet});
                }
            }
        });
        return skillList;
    }

    const createJobSkillTablets = () => {

        return getSkillList().map( (skillObject, index) => {
            return <JobSkillTablet 
                        key={`${skillObject.category}${index}${skillObject.skillName}`} 
                        category={skillObject.category} skillName={skillObject.skillName} 
                        selectFilter={selectFilter} 
                    />
        })
    }

    return (
        <div className='category-section'>
            {createJobSkillTablets()}
        </div>
    )
}

export default JobCategorySection;