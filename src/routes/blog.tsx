import { Outlet } from "solid-start";
import styles from "./blogPost.module.scss";

export default function BlogPost() {
  return (
    <div class={styles.blogPost}>
      <h1>Hey I'm the layout guy</h1>
      <Outlet />
    </div>
  );
}
