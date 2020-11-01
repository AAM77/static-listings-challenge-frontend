import React, { Component } from 'react';
import './App.scss';
import data from './data/data.json';
import Banner from './components/layout/Banner';
import JobListings from './components/job_listings/desktop/JobListings';
import SelectedFilters from './components/job_listings/filter/SelectedFilters';


class App extends Component {
  state = {
    jobListings: data,
  }

  filterSelectionHandler = (e) => {

  }

  render() {
    const { jobListings } = this.state;

    return (
      <div className="App">
        <Banner />
        <SelectedFilters />
        <JobListings jobListings={jobListings} />

        <div class="attribution footer">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.github.com/AAM77">Mohammad Adeel</a>.
        </div>
      </div>
    );
  }
}

export default App;
