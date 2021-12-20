import React, {useCallback} from 'react';
import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";

function Navbar({ theme = "light" }) {
  const router = useRouter();

  const isRouteActive = useCallback((route) => {
    return route === router.route
  }, [router.route])

  return (
    <div className={styles.navbar_wrapper} data-theme={theme}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.navbar_logo} passHref>
          <a>
            <img
              src={
                theme === "light"
                  ? "/img/nav-logo-light.svg"
                  : "/img/nav-logo-dark.svg"
              }
            ></img>
          </a>
        </Link>
        <div className={styles.navbar_links}>
          <Link href="/about">
            <a data-active={isRouteActive('/about')}>ABOUT</a>
          </Link>
          <Link href="/studio">
            <a data-active={isRouteActive('/studio')}>STUDIO</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
