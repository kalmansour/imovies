import React from "react";
import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const movie = props.movie;
  return (
    <MovieWrapper key={movie.title}>
      <Link to={`/movies/${movie.slug}`}>
        <img src={movie.poster} alt={movie.title} />
      </Link>
      <p>{movie.title}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
