import React, { Component } from 'react';
import JobCard from './JobCard';


class JobListings extends Component {
    render() {
        return (
            <div className='container' id='job-listings'>
                { this.props.jobListings.map( jobListing => <JobCard jobListing={jobListing} />) }
            </div>
        );
    }
}

export default JobListings;