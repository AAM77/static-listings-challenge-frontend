import React from 'react';
import JobLogo from './JobLogo';
import JobInfoSection from './JobInfoSection';


function JobCard({ jobListing }) {
    return(
        <div key={jobListing.id} className='card shadow'>
            <JobLogo logoPath={jobListing.logo} />
            <JobInfoSection jobListing={jobListing} />
        </div>
    );
}

export default JobCard;