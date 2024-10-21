import React from "react";
import Image from "next/image";
import classes from "../styles/Thumbnail.module.css";
interface Props {
  movieUrl: string;
}
function Thumbnail({ movieUrl }: Props) {
  return (
    <div className={classes.thumbnail}>
      <Image
        className={classes.image}
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${movieUrl}`}
        height={160}
        width={320}
        alt={movieUrl}
      />
    </div>
  );
}

export default Thumbnail;
