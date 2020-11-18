import React from "react";
import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper key={movie.title}>
      <Link
        to={`/movies/${movie.slug}`}
        className="d-flex justify-content-center"
      >
        <img src={movie.poster} alt={movie.title} />
      </Link>
    </MovieWrapper>
  );
};

export default MovieItem;
