import React from "react";
function Banner(props) {
  return <div>{props.movies.netflixOriginals[0].name}</div>;
}
export default Banner;
