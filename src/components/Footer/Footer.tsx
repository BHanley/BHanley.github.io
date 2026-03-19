import { socialLinks, siteConfig } from "@/data/config";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          © {year} {siteConfig.name}
        </span>
        <div className={styles.links}>
          {socialLinks.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className={styles.link}
              target={url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
