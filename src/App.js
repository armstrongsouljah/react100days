import React from 'react';
import './styles/App.css';
import BookComponent from './components/Items';
import books from './books';

function App() {
  return (
    <div className="app">
      <h1 class="header-center">Book Store</h1>
      <BookComponent books={books}/>
    </div>
  );
}

export default App;
