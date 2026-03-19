import { Layout } from "@/components/Layout/Layout";
import { Tag } from "@/components/Tag/Tag";
import { siteConfig } from "@/data/config";
import styles from "./About.module.scss";

const experience = [
  {
    dates: "2022 – Now",
    role: "Senior Software Engineer",
    company: "Your Current Company",
    description:
      "What you work on and what you've built there. Keep it punchy — one or two sentences.",
  },
  {
    dates: "2019 – 2022",
    role: "Software Engineer",
    company: "Previous Company",
    description:
      "What you worked on and what you shipped. Highlight the most interesting or impactful work.",
  },
  {
    dates: "2017 – 2019",
    role: "Junior Engineer",
    company: "First Job",
    description:
      "Early career role. How you got started and what you learned.",
  },
];

const skills = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "CSS Modules", "SCSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis"],
  },
  {
    label: "Tooling",
    items: ["Git", "Docker", "GitHub Actions"],
  },
];

export function About() {
  return (
    <Layout>
      <h1 className={styles.heading}>About</h1>

      <div className={styles.bio}>
        <p>{siteConfig.bio}</p>
        <p>
          Outside of work I{" "}
          <a href="#">fill this in with something real about yourself</a>. Based
          in {siteConfig.location}.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.company} className={styles.timelineItem}>
              <span className={styles.timelineDate}>{item.dates}</span>
              <div>
                <div className={styles.timelineRole}>{item.role}</div>
                <div className={styles.timelineCompany}>{item.company}</div>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillGroups}>
          {skills.map((group) => (
            <div key={group.label} className={styles.skillGroup}>
              <span className={styles.skillGroupLabel}>{group.label}</span>
              <div className={styles.skillTags}>
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
