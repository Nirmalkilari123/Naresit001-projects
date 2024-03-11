import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Movies from './Movies';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`);
    const data = await res.json();
    setMoviesList(data.Search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="container">
      <h1 className='head'>Movie Serach App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="movies-container">
        <Movies moviesList={moviesList} />
      </div>
    </div>
  );
}

export default App;
