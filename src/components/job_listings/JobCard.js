import React from 'react';
import JobLogo from './JobLogo';
import JobInfoSection from './JobInfoSection';
import JobCategorySection from './JobCategorySection';


function JobCard({ jobListing, selectFilter }) {
    let componentClass = '';

    switch (jobListing.featured) {
        case true:
            componentClass = 'featured-listing';
            break;
        default:
            break;
    }

    return(
        <div className={componentClass + ' card shadow'}>
            <JobLogo logoPath={jobListing.logo} />
            <JobInfoSection jobListing={jobListing} />

            <div><hr /></div>
            <JobCategorySection jobListing={jobListing} selectFilter={selectFilter} />
        </div>
    );
}

export default JobCard;