import { Layout } from "@/components/Layout/Layout";
import { Tag } from "@/components/Tag/Tag";
import { projects } from "@/data/projects";
import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <Layout>
      <h1 className={styles.heading}>Projects</h1>
      <p className={styles.subheading}>
        Things I&apos;ve built, shipped, or tinkered with.
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.slug} id={project.slug} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <div className={styles.cardLinks}>
                {project.url && (
                  <a
                    href={project.url}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>

            <p className={styles.cardDesc}>{project.description}</p>

            {project.longDescription && (
              <p className={styles.cardLongDesc}>{project.longDescription}</p>
            )}

            <div className={styles.cardFooter}>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <span className={styles.year}>{project.year}</span>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
