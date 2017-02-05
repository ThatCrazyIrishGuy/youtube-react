import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="col s12 offset-m2 m8 offset-l3 l6">
        <div className="input-field">
          <input
            id="searchBar"
            className="search-bar"
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={(event) => this.onInputChange(event.target.value)} />
        </div>
      </div>
    );
  }

}

export default SearchBar;
