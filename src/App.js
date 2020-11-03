import React, { Component } from 'react';
import './App.scss';
import data from './data/data.json';
import Banner from './components/layout/Banner';
import JobListings from './components/job_listings/JobListings';
import SelectedFilters from './components/filter/SelectedFilters';


class App extends Component {
  state = {
    jobListings: data,
    selectedFilters: [], // Should be an array of objects that contain both the category and the skill name.
    isSelectedFilters: false,
    browserWidth: Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    ),
  }

  getBrowserWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  setBrowserWidth = () => {
    const browserWidth = this.getBrowserWidth();
    this.setState({browserWidth: browserWidth});
  }

  setSelectedFiltersStatus = () => {
    const hasSelectedFilters = this.state.selectedFilters.length <= 0 ? false : true;
    this.setState({isSelectedFilters: hasSelectedFilters});
  }

  addFilterToState = (event) => {
    const category = event.target.getAttribute('data-category');
    const skillName = event.target.getAttribute('data-skillname');

    const isNotSelected = this.state.selectedFilters.every( selectedFilter => (
      selectedFilter.category !== category && selectedFilter.skillName !== skillName)
    );

    if (isNotSelected) {
      const newSelectedFilters = [...this.state.selectedFilters, {category: category, skillName: skillName}];
      const isFilters = newSelectedFilters.length > 0 ? true : false;
      this.setState({selectedFilters: newSelectedFilters, isSelectedFilters: isFilters});
    }
    
  }

  removeFilterFromState = (event) => {
    const selectedFilters = [...this.state.selectedFilters];
    const targetFilterIndex = selectedFilters.findIndex( (selectedFilter) => (
      selectedFilter.category === event.target.getAttribute('data-category') &&
      selectedFilter.skillName === event.target.getAttribute('data-skillname')
    ));

    if (targetFilterIndex !== -1) {
      selectedFilters.splice(targetFilterIndex, 1)
    }
     
     const isFilters = selectedFilters.length > 0 ? true : false;
     this.setState({selectedFilters: selectedFilters, isSelectedFilters: isFilters});
  }

  clearSelectedFilters = () => {
    const newSelectedFilters = [];
    const isFilters = newSelectedFilters.length > 0 ? true : false;
    this.setState({selectedFilters: newSelectedFilters, isSelectedFilters: isFilters});
  }

  componentDidMount = () => {
    this.setSelectedFiltersStatus();
    window.addEventListener('resize', this.setBrowserWidth);
  }

  render() {
    const { 
      jobListings, 
      selectedFilters,
      isSelectedFilters,

    } = this.state;

    return (
      <div className="App">
        <Banner browserWidth={this.state.browserWidth} />
        
        <SelectedFilters 
          selectedFilters={selectedFilters} 
          isFilters={isSelectedFilters} 
          removeFilter={this.removeFilterFromState} 
          clearFilters={this.clearSelectedFilters} 
        />

        <JobListings 
          jobListings={jobListings} 
          selectFilter={this.addFilterToState} 
          selectedFilters={selectedFilters} 
        />

        <div className="attribution footer">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.github.com/AAM77">Mohammad Adeel</a>.
        </div>
      </div>
    );
  }
}

export default App;
