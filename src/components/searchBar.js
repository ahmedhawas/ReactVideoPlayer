import React, { Component } from 'react';
// const Component = React.Component

class SearchBar extends Component {
  constructor (props) { // called when a new instance is created
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value = {this.state.term} // controlled component. Component controlled by the state.
        onChange = {event => this._handleInputChange(event.target.value)}/>
      </div>
    );
  }

  _handleInputChange(term) {
    this.setState({ term });
    this.props.handleSearchTermChange(term);
  }
}

export default SearchBar;
