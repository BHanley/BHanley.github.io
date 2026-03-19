import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout";
import { siteConfig, socialLinks } from "@/data/config";
import { featuredProjects } from "@/data/projects";
import { recentPosts } from "@/data/posts";
import styles from "./Home.module.scss";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function Home() {
  const emailLink = socialLinks.find((l) => l.icon === "email");
  const githubLink = socialLinks.find((l) => l.icon === "github");

  return (
    <Layout>
      <section className={styles.hero}>
        {emailLink && (
          <div
            className={[
              styles.status,
              siteConfig.availableForWork ? "" : styles.unavailable,
            ]
              .join(" ")
              .trim()}
          >
            {siteConfig.availableForWork
              ? "Available for new work"
              : "Not currently available for hire"}
          </div>
        )}

        <h1 className={styles.name}>{siteConfig.name}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>

        <div className={styles.cta}>
          {emailLink && (
            <a href={emailLink.url} className={styles.ctaPrimary}>
              Get in touch
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink.url}
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Projects</span>
            <Link to="/projects" className={styles.seeAll}>
              All projects →
            </Link>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects#${project.slug}`}
                className={styles.projectCard}
              >
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectDesc}>
                  {project.description}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {recentPosts.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Writing</span>
            <Link to="/writing" className={styles.seeAll}>
              All posts →
            </Link>
          </div>
          <div className={styles.postList}>
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to={post.externalUrl ?? `/writing/${post.slug}`}
                className={styles.postItem}
                {...(post.externalUrl
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={styles.postDate}>{formatDate(post.date)}</span>
                <span className={styles.postTitle}>{post.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}
