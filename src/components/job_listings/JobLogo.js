import React from 'react';


const JobLogo = ({ logoPath }) => {
    return (
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + logoPath} alt="job logo"></img>
        </div>
    )
}

export default JobLogo;