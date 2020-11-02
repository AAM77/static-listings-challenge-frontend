import React from 'react';
import JobCard from './JobCard';


const JobListings = ({ jobListings, selectFilter }) => {
    return (
        <div className='container' id='job-listings'>
            { jobListings.map( jobListing => <JobCard jobListing={jobListing} selectFilter={selectFilter}  />) }
        </div>
    );
}

export default JobListings;


