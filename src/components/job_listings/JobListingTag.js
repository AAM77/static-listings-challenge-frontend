import React from 'react';


const JobListingTag = ({ tagName }) => {
    let componentClass;

    /* Mohammad Adeel - November 3, 2020. Adds
    the relevant class to each JobListingTags, depending
    on wheter it is new or featured. */
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
        <div className={`${componentClass} job-listing-tag`}>
            <span>{tagName}</span>
        </div>
    )
}

export default JobListingTag;