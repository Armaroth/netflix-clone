// "use client";
// import { useState } from "react";
import SignUp from "./components/GetStarted";
import Browse from "./components/Browse";
import { fetchMovies } from "./utils/fetchResults";
export default async function Page() {
  const user = true;
  const movies = await fetchMovies();
  return <section>{user ? <Browse movies={movies} /> : <SignUp />}</section>;
}
