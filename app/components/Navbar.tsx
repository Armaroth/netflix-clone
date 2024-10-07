"use client";
import classes from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <section className={classes.container}>
      <section className={classes.navbar}>
        <Link href="/">
          <Image src="/logonetflix.png" alt="Netflix" width={100} height={40} />
        </Link>
        {pathname !== "/login" && (
          <Link href="/login" className={classes.login}>
            <h1>Sign-in</h1>
          </Link>
        )}
      </section>
    </section>
  );
}
