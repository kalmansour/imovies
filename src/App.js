import { Route, Switch } from "react-router";
// import { Link } from "react-router-dom";
// import logo from "./movie-logo.png";

//components
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import About from "./components/About";

//styling
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar theme={theme} />
      <Switch>
        <Route path="/movies/:movieSlug">
          <MovieDetail />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
