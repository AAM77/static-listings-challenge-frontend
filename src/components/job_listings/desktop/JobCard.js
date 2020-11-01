import React from 'react';
import JobLogo from './JobLogo';
import JobInfoSection from './JobInfoSection';
import JobCategorySection from './JobCategorySection';


function JobCard({ jobListing }) {
    let componentClass = '';

    switch (jobListing.featured) {
        case true:
            componentClass = 'featured-listing';
            break;
        default:
            break;
    }

    return(
        <div key={jobListing.id} className={componentClass + ' card shadow'}>
            <JobLogo logoPath={jobListing.logo} />
            <JobInfoSection jobListing={jobListing} />
            <JobCategorySection jobListing={jobListing} />
        </div>
    );
}

export default JobCard;