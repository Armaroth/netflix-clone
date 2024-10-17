import React from "react";
import { MovieResults } from "../typings";
import Image from "next/image";

interface Props {
  movies: MovieResults;
}
function Banner({ movies }: Props) {
  return (
    <div>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${
          movies.netflixOriginals[0].backdropPath ||
          movies.netflixOriginals[0].posterPath
        }`}
        width={300}
        height={300}
        alt={"kk"}
      />
    </div>
  );
}
export default Banner;
