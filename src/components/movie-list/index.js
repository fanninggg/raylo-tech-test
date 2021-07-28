import React  from "react";
import "./index.css";

function MovieList() {

  const fetchMovies = () => {
    const year = document.getElementById('yearInput').value;
    document.getElementById('movieList').innerHTML = `Loading the best movies from ${year}...`
    
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
      .then(response => response.json())
      .then(movies => insertMovies(movies.data))
  }

  const insertMovies = (movies) => {
    const movieList = document.getElementById('movieList')
    movieList.innerHTML = ''

    if (movies.length > 0) {
      movies.forEach((movie) => {
        const movieHTML = `<li className="slide-up-fade-in py-10">${movie.Title}</li>`
        movieList.insertAdjacentHTML('beforeend', movieHTML)
      })
    } else {
      movieList.innerHTML = `<div data-testid="no-result">No Results Found</div>`
    }
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" id="yearInput"/>
        <button className="" data-testid="submit-button" onClick={() => fetchMovies()}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList" id="movieList">
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export default MovieList