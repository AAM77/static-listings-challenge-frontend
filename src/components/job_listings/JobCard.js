import React from 'react';
import JobLogo from './JobLogo';
import JobInfoSection from './JobInfoSection';
import JobCategorySection from './JobCategorySection';


function JobCard({ jobListing, selectFilter }) {
    let componentClass = '';

    /* Mohammad Adeel - November 3, 2020. Adds the
    'featured-listing' class if the jobListing
    is listed as featured (is true). */
    switch (jobListing.featured) {
        case true:
            componentClass = 'featured-listing';
            break;
        default:
            break;
    }

    return(
        <div className={`${componentClass} card shadow`}>
            <JobLogo logoPath={jobListing.logo} />
            <JobInfoSection jobListing={jobListing} />

            <div><hr /></div>
            <JobCategorySection jobListing={jobListing} selectFilter={selectFilter} />
        </div>
    );
}

export default JobCard;