import React from 'react';


const JobInfoSection = ({ jobListing }) => {
    return (
        <div className='job-info'>
            <div>Company Name</div>
            <div>Job Title</div>
            <div className='bottom'>
                Post Date · Job Type · Location
            </div>
        </div>
    )
}

export default JobInfoSection;