import React from "react";
import classes from "../styles/Browse.module.css";
import Banner from "./Banner";
import { fetchMovies } from "../utils/fetchResults";
async function Browse() {
  const movies = await fetchMovies();
  return (
    <div className={classes.test}>
      <Banner movies={movies} />
    </div>
  );
}

export default Browse;
