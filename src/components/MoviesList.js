import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.title}
          title={movie.title}
          releaseDate={movie["release_date"]}
          openingText={movie["opening_crawl"]}
        />
      ))}
    </ul>
  );
};

export default MovieList;
