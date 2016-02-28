import React, { Component } from 'react';
// const Component = React.Component

class SearchBar extends Component {
  constructor (props) { // called when a new instance is created
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
        value = {this.state.term} // controlled component. Component controlled by the state.
        onChange = {this._handleInputChange.bind(this)}/>
      </div>
    );
  }

  _handleInputChange(event) {
    console.log(this);
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
