import React from "react";
import classes from "../styles/Browse.module.css";
import Banner from "./Banner";
function Browse(props) {
  return (
    <div className={classes.test}>
      <Banner movies={props.movies} />
    </div>
  );
}

export default Browse;
