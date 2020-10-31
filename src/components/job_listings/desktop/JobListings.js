import React, { Component } from 'react';


class JobListings extends Component {

    displayJobListings = () => {
        this.props.jobListings.forEach( jobListing => console.log(jobListing))
    }

    render() {
        return (
            <div>
                {this.displayJobListings()}
            </div>
        );
    }
}

export default JobListings;