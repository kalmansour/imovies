import React from "react";
import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Title>iMovies</Title>
      <Description>Your Movie Library</Description>
      <ShopImage
        alt="imovies"
        src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg"
      />
    </>
  );
};

export default Home;
