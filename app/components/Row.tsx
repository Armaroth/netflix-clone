"use client";
import React, { ReactNode, useRef, useState } from "react";
import { Movies } from "../typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Thumbnail from "./Thumbnail";
import classes from "../styles/Row.module.css";

interface Props {
  title: string;
  movies: Movies;
}
function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      setIsMoved(true);
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <section>
      <section className={classes.title}>
        <h1>{title}</h1>
      </section>
      <section className={classes.row} ref={rowRef}>
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`${classes.icon} ${classes.left} ${
            !isMoved && classes.hidden
          }`}
          height={30}
          width={30}
        />
        <section className={classes.thumbnail}>
          {movies.map((movie): React.JSX.Element => {
            return (
              <Thumbnail
                key={movie.id}
                movieUrl={
                  movie.backdropPath ? movie.backdropPath : movie.posterPath
                }
              />
            );
          })}
        </section>
        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className={`${classes.icon} ${classes.right}`}
          height={30}
          width={30}
        />
      </section>
    </section>
  );
}

export default Row;
