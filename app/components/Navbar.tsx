"use client";
import classes from "../styles/Navbar.module.css";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <section className={classes.container}>
      <section className={classes.navbar}>
        <section className={classes.leftSection}>
          <Link href="/">
            <img src="/logonetflix.png" alt="Netflix" width={80} height={40} />
          </Link>
          <ul>
            <li>Home</li>
            <li>TV shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My list</li>
          </ul>
        </section>
        <section className={classes.rightSection}>
          \
          {pathname !== "/login" && (
            <Link href="/login" className={classes.login}>
              <h1>Sign-in</h1>
            </Link>
          )}
        </section>
      </section>
    </section>
  );
}
