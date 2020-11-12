import styled, { createGlobalStyle } from "styled-components";

// import { Link } from "react-router-dom";

export const theme = {
  mainColor: "mediumpurple", // main font color
  backgroundColor: "#f5fffa", // main background color
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

// SearchBar Component Styles
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Description = styled.h4`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
`;

export const Title = styled.h1`
  text-align: center;
  background-color: #f2e596;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  border: thick solid;
  border-color: ${(props) => props.theme.mainColor};
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: thick solid;
    border-color: ${(props) => props.theme.mainColor};
  }

  p {
    text-align: center;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const CopyButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.mainColor};
`;
