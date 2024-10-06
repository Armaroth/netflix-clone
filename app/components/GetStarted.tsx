"use client";
import classes from "../styles/getStarted.module.css";
export default function SignUp() {
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
        ></input>
        <button className={classes.inputButton}>Get started</button>
      </section>
    </section>
  );
}
