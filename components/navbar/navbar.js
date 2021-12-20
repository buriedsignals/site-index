const React = require("react");
import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar({ theme = "light" }) {
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
            ABOUT
          </Link>
          <Link href="/studio">
            STUDIO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
