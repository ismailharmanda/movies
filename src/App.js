import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Olağan üstü başarısızlıklar söz konusu.");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && (
          <p>There is no movies to show.</p>
        )}
        {error === null && isLoading && <p>Loading...</p>}
        {error !== null && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
