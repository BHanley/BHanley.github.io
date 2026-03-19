import { Layout } from "@/components/Layout/Layout";
import { Tag } from "@/components/Tag/Tag";
import { posts } from "@/data/posts";
import styles from "./Writing.module.scss";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Writing() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <Layout>
      <h1 className={styles.heading}>Writing</h1>
      <p className={styles.subheading}>
        Notes, walkthroughs, and things worth writing down.
      </p>

      <div className={styles.list}>
        {sorted.map((post) => {
          const href = post.externalUrl ?? `/writing/${post.slug}`;
          const isExternal = Boolean(post.externalUrl);

          return (
            <a
              key={post.slug}
              href={href}
              className={styles.item}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className={styles.date}>{formatDate(post.date)}</span>
              <div className={styles.right}>
                <span className={styles.title}>
                  {post.title}
                  {isExternal && (
                    <span className={styles.external}> ↗</span>
                  )}
                </span>
                {post.description && (
                  <span className={styles.desc}>{post.description}</span>
                )}
                {post.tags.length > 0 && (
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </Layout>
  );
}
