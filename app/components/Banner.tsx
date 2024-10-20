import React from "react";
import { Movies } from "../typings";
import Image from "next/image";
import classes from "../styles/Banner.module.css";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  movies: Movies;
}
function Banner({ movies }: Props) {
  const featured: number = Math.floor(Math.random() * movies.length);
  return (
    <section className={classes.banner}>
      <section className={classes.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${
            movies[featured].backdropPath || movies[featured].posterPath
          }`}
          width={1000}
          height={600}
          alt={"featured netflix original"}
          className={classes.image}
        />
      </section>
      <section className={classes.display}>
        <h1 className={classes.title}>{movies[featured].name}</h1>
        <h2 className={classes.overview}>{movies[featured].overview}</h2>
      </section>
      <section className={classes.buttons}>
        <button className={classes.test}>
          Play
          <PlayIcon height={30} width={30} />
        </button>
        <button className={classes.test}>
          See more <InformationCircleIcon height={30} width={30} />
        </button>
      </section>
    </section>
  );
}
export default Banner;
