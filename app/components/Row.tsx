import React, { ReactNode } from "react";
import { Movies } from "../typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movies;
}
function Row({ title, movies }: Props) {
  return (
    <section>
      <section>{title}</section>
      <section>
        <ChevronLeftIcon height={30} width={30} />
        <section className=""></section>
        {movies.map((movie): React.JSX.Element => {
          return <Thumbnail />;
        })}
        <ChevronRightIcon height={30} width={30} />
      </section>
    </section>
  );
}

export default Row;
