import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/BannerComponent'

function App() {
  return (
    <div className="container">
       <NavBar/>
       <Banner/>
    </div>
  );
}

export default App;
