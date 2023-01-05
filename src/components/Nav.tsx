import { A } from "solid-start";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav class={styles.nav}>
      <A href="/">Index</A>
      <A href="/about">About</A>
    </nav>
  );
}

export default Nav;
