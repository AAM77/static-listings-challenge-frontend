import React from 'react';
import JobLogo from './JobLogo';
import JobInfoSection from './JobInfoSection';
import JobCategorySection from './JobCategorySection';


function JobCard({ jobListing }) {
    return(
        <div key={jobListing.id} className='card shadow'>
            <JobLogo logoPath={jobListing.logo} />
            <JobInfoSection jobListing={jobListing} />
            <JobCategorySection jobListing={jobListing} />
        </div>
    );
}

export default JobCard;