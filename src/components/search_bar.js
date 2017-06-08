import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />
// }

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = { term: "" };
  }

  render () {
    return (
      <div>
        <input
          value = { this.state.term }
          onChange = { event => this.setState({ term: event.target.value }) } />
      </div>
    )
  }

  // onInputChange (event) {
  //   console.log(event.target.value)
  // }
}

export default SearchBar;
