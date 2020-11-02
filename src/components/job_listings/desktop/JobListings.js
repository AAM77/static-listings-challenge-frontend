import React from 'react';
import JobCard from './JobCard';


const JobListings = ({ jobListings }) => {
    return (
        <div className='container' id='job-listings'>
            { jobListings.map( jobListing => <JobCard jobListing={jobListing}  />) }
        </div>
    );
}

export default JobListings;


