import React, { Component } from 'react';
import './App.scss';
import data from './data/data.json';
import Banner from './components/layout/Banner';
import JobListings from './components/job_listings/desktop/JobListings';

class App extends Component {
  state = {
    jobListings: data,
  }

  render() {
    const { jobListings } = this.state;

    return (
      <div className="App">
        <Banner />
        <JobListings jobListings={jobListings} />

        <div class="attribution footer">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Mohammad Adeel</a>.
        </div>
      </div>
    );
  }
}

export default App;
