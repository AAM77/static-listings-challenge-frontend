import React from 'react';
import JobLogo from './JobLogo';


function JobCard({ jobListing }) {
    return(
        <div key={jobListing.id} className='card shadow'>
            <JobLogo logoPath={jobListing.logo} />
            <div>{jobListing.company}</div>
        </div>
    );
}

export default JobCard;