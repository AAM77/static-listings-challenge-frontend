import React from 'react';
import desktopBanner from './bg-header-desktop.svg';
import mobileBanner from './bg-header-mobile.svg';

const Banner = ({ browserWidth }) => { 
    return (
        <div id='banner'>
            {
                browserWidth > 768 ? 
                    <img src={desktopBanner} alt="cyan page banner"></img> 
                :
                    <img src={mobileBanner} alt="cyan page banner"></img>
            }
            
        </div>
    )
}

export default Banner;