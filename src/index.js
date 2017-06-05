import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA1f9ggnvfVMEhfUOpdeH0KBtvfSjzij9A';

const App = () => {
  return (
    <div>
      <div> Hello Muna! </div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
