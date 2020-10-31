import React from 'react';


function JobCard({ jobListing }) {
    return(
        <div key={jobListing.id} className='card'>
            <div>{jobListing.company}</div>
        </div>
    );
}

export default JobCard;