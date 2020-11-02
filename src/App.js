import React, { Component } from 'react';
import './App.scss';
import data from './data/data.json';
import Banner from './components/layout/Banner';
import JobListings from './components/job_listings/desktop/JobListings';
import SelectedFilters from './components/job_listings/filter/SelectedFilters';


class App extends Component {
  state = {
    jobListings: data,
    selectedFilters: [], // Should be an array of objects that contain both the category and the skill name.
    isSelectedFilters: false,
  }

  setSelectedFiltersStatus = () => {
    const hasSelectedFilters = this.state.selectedFilters.length <= 0 ? false : true;
    this.setState({isSelectedFilters: hasSelectedFilters});
  }

  addFilterToState = (event) => {
    const category = event.target.getAttribute('data-category');
    const skillName = event.target.getAttribute('data-skillName');
    
    const newSelectedFilters = [...this.state.selectedFilters, {category: category, skillName: skillName}]
    const isFilters = newSelectedFilters.length > 0 ? true : false;
    
    this.setState({selectedFilters: newSelectedFilters, isSelectedFilters: isFilters});
  }

  removeFilterFromState = (event) => {
    const selectedFilters = [...this.state.selectedFilters];
    const targetFilterIndex = selectedFilters.findIndex( (selectedFilter) => (
      selectedFilter.category === event.target.getAttribute('data-category') &&
      selectedFilter.skillName === event.target.getAttribute('data-skillName')
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
  }

  render() {
    const { jobListings } = this.state;

    return (
      <div className="App">
        <Banner />
        <SelectedFilters selectedFilters={this.state.selectedFilters} isFilters={this.state.isSelectedFilters} removeFilter={this.removeFilterFromState} clearFilters={this.clearSelectedFilters} />
        <JobListings jobListings={jobListings} selectFilter={this.addFilterToState} selectedFilters={this.state.selectedFilters} />

        <div class="attribution footer">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.github.com/AAM77">Mohammad Adeel</a>.
        </div>
      </div>
    );
  }
}

export default App;
