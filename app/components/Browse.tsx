import React from "react";
import classes from "../styles/Browse.module.css";
import Banner from "./Banner";
import { fetchMovies } from "../utils/fetchResults";
import Row from "./Row";
async function Browse() {
  const movies = await fetchMovies();
  return (
    <section className={classes.browse}>
      <Banner movies={movies.netflixOriginals} />
      <section className={classes.rowContainer}>
        <Row title="Netflix originals" movies={movies.netflixOriginals} />
        <Row title="Trendin now" movies={movies.trendingNow} />
        <Row title="Top rated" movies={movies.topRated} />
        <Row title="Comedy movies" movies={movies.comedyMovies} />
        <Row title="Documentaries" movies={movies.documentaries} />
        <Row title="Horror movies" movies={movies.horrorMovies} />
        <Row title="Romance movies" movies={movies.romanceMovies} />
        <Row title="Action movies" movies={movies.actionMovies} />
      </section>
    </section>
  );
}

export default Browse;
