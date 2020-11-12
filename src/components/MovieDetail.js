import React from "react";
import { DetailWrapper, CopyButtonStyled } from "../styles";
import movies from "../movies";
import { Redirect, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
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
      <DetailWrapper>
        <h1>{movie.title}</h1>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.plot}</p>

        {recommendedList}

        <CopyButtonStyled
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy
        </CopyButtonStyled>
      </DetailWrapper>
    </>
  );
};

export default MovieDetail;
