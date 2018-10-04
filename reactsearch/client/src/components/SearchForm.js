import React from "react";

const SearchForm = props => (
  <form className="container">
    <div className="form-group">
      <label for="userSearchTopic">Search Topic</label>
      <input
        onChange={props.handleInputChange}
        name="query"
        type="text"
        className="form-control"
        id="userSearchTopic"
        placeholder="&quot;Florida Man&quot;"
        required
      />
    </div>
    <div className="form-group">
      <label for="userStartYear">Start Year (Article Range)</label>
      <input
        onChange={props.handleInputChange}
        name="yearStart"
        type="number"
        className="form-control"
        min="1900"
        max="2099"
        step="1"
        placeholder="2000"
        required
      />
    </div>
    <div className="form-group">
      <label for="userEndYear">End Year (Article Range)</label>
      <input
        onChange={props.handleInputChange}
        name="yearEnd"
        type="number"
        className="form-control"
        min="1900"
        max="2099"
        step="1"
        placeholder="2018"
        required
      />
    </div>
    <button
      className="btn btn-primary"
      type="submit"
      onClick={props.testFunction}
    >
      Find
    </button>
  </form>
);

export default SearchForm;