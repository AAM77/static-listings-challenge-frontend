import React from 'react';


const JobListingTag = ({ tagName }) => {
    let componentClass;

    switch (tagName) {
        case 'NEW!':
            componentClass = 'new'
            break;
        case 'FEATURED':
            componentClass = 'featured'
            break;
        default:
            break;
    }

    return (
        <div className={componentClass + ' job-listing-tag'}>
            <span>{tagName}</span>
        </div>
    )
}

export default JobListingTag;