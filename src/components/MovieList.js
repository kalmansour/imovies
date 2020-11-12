import movies from "../movies";
import { useState } from "react";

//Components
import SearchBar from "./SearchBar";
import MovieItem from "./MovieItem";

// Styles
import { ListWrapper } from "../styles";

const MovieList = () => {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const movieList = filteredMovies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{movieList}</ListWrapper>
    </>
  );
};

export default MovieList;
