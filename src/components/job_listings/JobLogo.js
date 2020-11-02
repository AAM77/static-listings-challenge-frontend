import React from 'react';


const JobLogo = ({ logoPath }) => {
    return (
        <div className='logo'>
            <div id='image-container'>
                <img src={process.env.PUBLIC_URL + logoPath} alt="job logo"></img>
            </div>
        </div>
    )
}

export default JobLogo;