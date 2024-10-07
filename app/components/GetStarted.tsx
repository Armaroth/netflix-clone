"use client";
import { useRef, useState } from "react";
import classes from "../styles/getStarted.module.css";
export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const emailRef = useRef<HTMLInputElement | null>(null);
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(() => event.target.value);
  }
  function onGetStartedHandler(event) {
    emailRef.current && emailRef!.current.focus();
  }
  return (
    <section className={classes.signUp}>
      <h1 className={classes.h1}>
        Unlimited movies, TV <br />
        shows, and more
      </h1>
      <h2 className={classes.h2}>Starts at EUR 7.99. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <section className={classes.input}>
        <input
          placeholder="Email adress"
          className={classes.inputEmail}
          ref={emailRef}
          value={email}
          onChange={onChangeHandler}
        ></input>
        <button className={classes.inputButton} onClick={onGetStartedHandler}>
          Get started
        </button>
      </section>
    </section>
  );
}
