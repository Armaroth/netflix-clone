// "use client";
// import { useState } from "react";
import SignUp from "./components/GetStarted";
import Browse from "./components/Browse";
import { fetchMovies } from "./utils/fetchResults";
export default function Page() {
  const user = true;

  return <section>{user ? <Browse /> : <SignUp />}</section>;
}
