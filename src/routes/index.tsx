import { For } from "solid-js";
import { A, createRouteData, useRouteData } from "solid-start";
import styles from "./Home.module.css";

type Meta = {
  title: string;
  date: string;
  description: string;
  thumbnailurl: string;
};

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob("./blog/*.mdx");

    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace("./blog", "").replace(".mdx", "");
      const meta = await files[file]();
      return { slug, ...((await meta) as Meta) };
    });
    console.log(files);

    return Promise.all(posts);
  });
};

function Home() {
  const posts = useRouteData<typeof routeData>();
  return (
    <div>
      <h1>My SolidStart blog</h1>
      <section class={styles.articleList}>
        <For each={posts()}>
          {(post) => (
            <A class={styles.item} href={`/blog/${post.slug}`}>
              <div class={styles.thumbnail}>
                <img src={post.thumbnailurl} alt="thumbnail" loading="lazy" />
              </div>
              <div>
                <h2 class={styles.title}>{post.title}</h2>
                <p class={styles.description}>{post.description}</p>
                <p class={styles.date}>{post.date}</p>
              </div>
            </A>
          )}
        </For>
      </section>
    </div>
  );
}

export default Home;
