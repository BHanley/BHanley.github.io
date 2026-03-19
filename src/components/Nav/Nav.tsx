import { NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "@/data/config";
import styles from "./Nav.module.scss";

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <NavLink to="/" className={styles.wordmark}>
          {siteConfig.name}
        </NavLink>
        <div className={styles.links}>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.active : ""].join(" ").trim()
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
