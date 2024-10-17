"use client";
import classes from "../styles/Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
export default function NavBar() {
  const [user, setUser] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <section className={classes.container}>
      <section className={classes.navbar}>
        <section className={classes.leftSection}>
          <Link href="/" className={classes.icon}>
            <img src="/logonetflix.png" alt="Netflix" width={80} height={40} />
          </Link>
          <div onClick={() => setIsOpen(() => !isOpen)}>
            <h3 className={classes.dropDown}>Browse</h3>
            <ul
              className={
                isOpen
                  ? `${classes.navLinks} ${classes.active}`
                  : classes.navLinks
              }
            >
              <li>Home</li>
              <li>TV shows</li>
              <li>Movies</li>
              <li>News & Popular</li>
              <li>My list</li>
            </ul>
          </div>
        </section>
        <section className={classes.rightSection}>
          <MagnifyingGlassIcon
            height={30}
            width={30}
            color="white"
            className={classes.icon}
          />
          <BellIcon
            height={30}
            width={30}
            color="white"
            className={classes.icon}
          />
          {pathname !== "/login" && !user ? (
            <Link
              href="/login"
              className={`${classes.login} + ${classes.icon}`}
            >
              <h1>Sign-in</h1>
            </Link>
          ) : (
            user && (
              <Link href={"/account"} className={classes.icon}>
                <UserIcon height={30} width={30} color="white" />
              </Link>
            )
          )}
        </section>
      </section>
    </section>
  );
}
