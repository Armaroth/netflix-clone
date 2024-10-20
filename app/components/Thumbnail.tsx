import React from "react";
import Image from "next/image";
import clases from "../styles/Thumbnail.module.css";
interface Props {
  movieUrl: string;
}
function Thumbnail({ movieUrl }: Props) {
  return (
    <div className={clases.thumbnail}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${movieUrl}`}
        height={180}
        width={320}
        alt={movieUrl}
      />
    </div>
  );
}

export default Thumbnail;
