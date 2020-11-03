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
    browserWidth: null,
  }

  getBrowserWidth = () => {
    /* Mohammad Adeel - November 3, 2020.
    Returns a close estimate of the device's 
    width. This is currently being used to 
    replace banner image depending on the
    browser width, */
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  setBrowserWidth = () => {
    /* Mohammad Adeel - November 3, 2020. Sets 
    the current browser wide to the state */
    const browserWidth = this.getBrowserWidth();
    this.setState({browserWidth: browserWidth});
  }

  setSelectedFiltersStatus = () => {
    /* Mohammad Adeel - November 3, 2020. Determines
    if the user has selected filters by the length
    of the array of selected filters as a boolean.
    Used as a trigger to display/hide the filter 
    component. */
    const hasSelectedFilters = this.state.selectedFilters.length <= 0 ? false : true;
    this.setState({isSelectedFilters: hasSelectedFilters});
  }

  isFilters = (selectedFilters) => {
    /* Mohammad Adeel - November 3, 2020. Determines if
    the user has selected any filters. */
    return selectedFilters.length > 0 ? true : false
  }

  addFilterToState = (event) => {
    /* Mohammad Adeel - November 3, 2020. Retrieves the category
    and skillname from the component and uses it to create a filter.
    Used to add the filter to the state's selectedFilters array.
    This is used to create and add the appropriate Filter-tag component
    to the SelectedFilters component. */
    const category = event.target.getAttribute('data-category');
    const skillName = event.target.getAttribute('data-skillname');

    /* Mohammad Adeel - November 3, 2020. Prevent duplicates from
    getting added to the state. */
    const isNotSelected = this.state.selectedFilters.every( selectedFilter => selectedFilter.skillName !== skillName);

    if (isNotSelected) {
      const newSelectedFilters = [...this.state.selectedFilters, {category: category, skillName: skillName}];

      this.setState({
        selectedFilters: newSelectedFilters, 
        isSelectedFilters: this.isFilters(newSelectedFilters)
      });
    }
  }

  removeFilterFromState = (event) => {
    /* Mohammad Adeel - November 3, 2020. Remove the selected 
    filter-tag from the state based on the category and skillname 
    from the retrieved element. */

    const selectedFilters = [...this.state.selectedFilters];

    /* Mohammad Adeel - November 3, 2020. Retrieves the index of the JS 
    object representing the selected filter. */
    const targetFilterIndex = selectedFilters.findIndex( (selectedFilter) => (
      selectedFilter.category === event.target.getAttribute('data-category') &&
      selectedFilter.skillName === event.target.getAttribute('data-skillname')
    ));

    /* Mohammad Adeel - November 3, 2020. Splices out/removes the target
    object/filter from the copied array. */
    if (targetFilterIndex !== -1) {
      selectedFilters.splice(targetFilterIndex, 1)
    }
     this.setState({selectedFilters: selectedFilters, isSelectedFilters: this.isFilters(selectedFilters)});
  }

  clearSelectedFilters = () => {
    /* Mohammad Adeel - November 3, 2020. Used to clear all filters upon clicking. */
    const selectedFilters = [];
    this.setState({selectedFilters: selectedFilters, isSelectedFilters: this.isFilters(selectedFilters)});
  }

  componentDidMount = () => {
    /* Mohammad Adeel - November 3, 2020. Sets initial values and
    adds eventhandlers to the DOM. */
    this.setSelectedFiltersStatus();
    this.setBrowserWidth();
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
