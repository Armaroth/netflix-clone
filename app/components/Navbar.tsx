import classes from "../styles/Navbar.module.css";
import Image from "next/image";
export default function NavBar() {
  return (
    <section className={classes.navbar}>
      <Image src="/logonetflix.png" alt="Netflix" width={100} height={40} />
      <button className={classes.login}>Sign-in</button>
    </section>
  );
}
