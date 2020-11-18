import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const theme = {
  mainColor: "#E50914",
  backgroundColor: "white",
  pink: "#eea9b8",
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.mainColor};
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;

//MovieItem Styling
export const MovieWrapper = styled.div`
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    padding-bottom: 30px;
    padding-right: 10px;
  }

  p {
    text-align: center;
  }
`;

//MovieDetail Styling
export const DetailWrapper = styled.div`
  width: 80%;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    float: left;
  }

  p {
    vertical-align: middle;
    text-align: left;
    padding-left: 250px;
    /* padding-right: ; */
  }
`;

export const RandomWrapper = styled.div`
  padding-top: 75px;
  float: right;

  h4 {
    text-align: center;
    padding-right: 50px;
  }
`;

//NavBar Styling
export const Logo = styled(Link)`
  padding: 0.75em;

  h3 {
    color: ${({ theme }) => theme.mainColor};
  }

  img {
    width: 5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavStyled = styled.nav`
  background-color: ___CSS_0___;
  color: ${({ theme }) => theme.mainColor};
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${({ theme }) => theme.mainColor};

  &.hover {
    background-color: yellow;
  }

  &.active {
    color: ${({ theme }) => theme.backgroundColor};
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

export const LinkStyle = styled(Link)`
  padding: 0.25em 1em;
  color: ${({ theme }) => theme.mainColor};

  &.active {
    background-color: pink;
  }
`;

//About Styling
export const AboutStyling = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  h1 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 150px;
  }

  h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    border: thick solid;
    border-color: ${({ theme }) => theme.mainColor};
  }
`;

//MovieList Styling
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

//Home Styling
export const HomeWrapper = styled.div`
  h1 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 150px;
  }

  h4 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    padding-top: 10px;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    border: thick solid;
    border-color: ${({ theme }) => theme.mainColor};
  }
`;
