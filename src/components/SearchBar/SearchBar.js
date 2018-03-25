import React from 'react';
import './SearchBar.css';

let sortByOptions= {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};



class SearchBar extends React.Component {
  renderSortByOptions() {
  return Object.keys(sortByOptions).map(sortByOptions => {
    sortByOptions = sortByOptions[sortByOptions];
    return <li key={sortByOptions}>{sortByOptions}</li>;
  })}
render() {
  return (
  <div className="SearchBar">
    <div className="SearchBar-sort-options">
      <ul>
        <renderSortByOptions />
      </ul>
    </div>
    <div className="SearchBar-fields">
      <input placeholder="Search Businesses" />
      <input placeholder="Where?" />
    </div>
  </div>)}};

export default SearchBar;
