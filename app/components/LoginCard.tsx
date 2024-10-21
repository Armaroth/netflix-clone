import Link from "next/link";
import classes from "../styles/LoginCard.module.css";
export default function LoginCard() {
  return (
    <>
      <section className={classes.container}>
        <section className={classes.card}>
          <section className={classes.header}>
            <h1>Sign in</h1>
          </section>
          <section className={classes.form}>
            <input className={classes.input} placeholder="Email" />
            <input
              className={classes.input}
              placeholder="Password"
              type="password"
            />
            <button className={classes.signInButton}>Sign in</button>
          </section>
          <section className={classes.footer}>
            <h1>
              {" New to Netflix? "}
              <Link className={classes.link} href="/">
                Sign up
              </Link>
            </h1>
          </section>
        </section>
      </section>
    </>
  );
}
