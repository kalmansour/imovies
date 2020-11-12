import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

//components
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Home from "./components/Home";

//styling
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Link to="/movies" style={{ margin: 10, float: "right" }}>
        Movies
      </Link>
      <Switch>
        <Route path="/movies/:movieSlug">
          <MovieDetail />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
