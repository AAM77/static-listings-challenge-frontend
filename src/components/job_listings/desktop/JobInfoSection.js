import React from 'react';


const JobInfoSection = ({ jobListing }) => {
    return (
        <div className='job-info'>
            <div className='company'>{jobListing.company}</div>
            <div className='position'>{jobListing.position}</div>
            <div className='additional-details'>
                {jobListing.postedAt}<span className='interpunct'>·</span>{jobListing.contract}<span className='interpunct'>·</span>{jobListing.location}
            </div>
        </div>
    )
}

export default JobInfoSection;