// "use client";
// import { useState } from "react";
import SignUp from "./components/GetStarted";
import Browse from "./components/Browse";
export default function Page() {
  const user = true;
  return <section>{user ? <Browse /> : <SignUp />}</section>;
}
