import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />
// }

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state={term: ''};
  }

  render () {
    return (
      <div className='input-group input-group-lg search-bar-container'>
        <input type='text'
               className='form-control search-bar--input'
               placeholder='VideoName'
               aria-describedby='sizing-addon1'
               value={this.state.term}
               onChange={event => this.onInputTermChange(event.target.value)} />
      </div>
    );
  }

  onInputTermChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
