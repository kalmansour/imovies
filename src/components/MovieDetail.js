import React from "react";
import { DetailWrapper, RandomWrapper } from "../styles";
import movies from "../movies";
import { Redirect, useParams } from "react-router-dom";
import MovieItem from "./MovieItem";

const MovieDetail = () => {
  const movieSlug = useParams().movieSlug;

  const movie = movies.find((movie) => movie.slug === movieSlug);
  if (!movie) return <Redirect to="/movies" />;

  const recommendedItem = Math.floor(Math.random() * Math.floor(movies.length));
  console.log(movies[recommendedItem]);

  const filteredRecommended = movies.filter(
    (movie) => movie.recommended === true
  );

  const recommendedList = filteredRecommended.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  return (
    <>
      {" "}
      <RandomWrapper>
        <h4>Recommended Movies</h4>
        {recommendedList}
      </RandomWrapper>
      <DetailWrapper className="col-lg-8 col-md-12 col-sm-12">
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy Url
        </button>
        <h1>{movie.title}</h1> <img src={movie.poster} alt={movie.title} />
        <p>{movie.plot}</p>
        <p>{movie.released}</p>
        <p>{movie.runtime}</p>
        <p>{movie.genre}</p>
      </DetailWrapper>
    </>
  );
};

export default MovieDetail;
