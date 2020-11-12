import React from 'react';
import JobCard from './JobCard';


const JobListings = ({ jobListings, selectFilter, selectedFilters }) => {

    const getFilteredJobListings = () => {
        /*
        Mohammad Adeel - November, 1, 2020.
        Retrieves only those job listings that match the skillNames of all of the selected filters.
        If there are no selected filters, it returns all of the jobListings.
        */
        if (selectedFilters.length > 0) {
            return jobListings.filter(jobListing => {
                for (const selectedFilter of selectedFilters) {
                    if (['tools','languages'].includes(selectedFilter.category)) {
                        if (!jobListing[selectedFilter.category].includes(selectedFilter.skillName)) {
                            return false;
                        }
                    } else if (['role', 'level'].includes(selectedFilter.category)) {
                        if (jobListing[selectedFilter.category] !== selectedFilter.skillName) {
                            return false;
                        }
                    }
                }
                return true;
            })
        }
        return jobListings;
    }

    return (
        <div className='container' id='job-listings'>
            { getFilteredJobListings().map( (jobListing, index) => (
                    <JobCard 
                        key={`${index}${jobListing.company}${jobListing.posted_at}${jobListing.id}`} 
                        jobListing={jobListing} 
                        selectFilter={selectFilter}  
                    />
                ))
            }
        </div>
    );
}

export default JobListings;


