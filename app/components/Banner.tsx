import React from "react";
import requests from "../utils/requests";
import classes from "../styles/Browse.module.css";

function Banner(props) {
  console.log(props.movies.netflixOriginals[1]);
  return <div>{props.movies.comedyMovies[0].original_title}</div>;
}
export default Banner;
