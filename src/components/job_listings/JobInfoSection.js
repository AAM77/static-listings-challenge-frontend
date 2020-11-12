import React from 'react';
import JobListingTag from './JobListingTag';


const JobInfoSection = ({ jobListing }) => {

    const getTagNames = () => {
        /* Mohammad Adeel - November 3, 2020.
        Dynamically create a list/an array of tag names.
        This list gets used to create JobListingTag 
        components for them. */
        const tagNames = [];
        if (jobListing.new) {
            tagNames.push('NEW!');
        }

        if (jobListing.featured) {
            tagNames.push('FEATURED');
        }

        return tagNames;
    }

    const createJobListingTags = () => {
        return getTagNames().map( (tagName, index) => (
        <JobListingTag 
            key={`${tagName}${jobListing.company}${index}`} 
            tagName={tagName} 
        />
        ))
    }

    return (
        <div className='job-info'>
            <div className='company-and-tags'>
                <div className='company'>
                    {jobListing.company}
                </div>
                <div className='tags'>
                    {createJobListingTags()}
                </div>
            </div>
            <div className='position'><span className='position-text'>{jobListing.position}</span></div>
            <div className='additional-details'>
                {jobListing.posted_at}<span className='interpunct'>·</span>{jobListing.contract}<span className='interpunct'>·</span>{jobListing.location}
            </div>
        </div>
    )
}

export default JobInfoSection;