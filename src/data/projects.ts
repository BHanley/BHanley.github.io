import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A short one-line description of what this project does.",
    longDescription:
      "Longer description of the project, its goals, technical challenges, and what you learned building it. Update this with your actual project details.",
    tags: ["TypeScript", "React", "Vite"],
    url: "https://example.com",
    repoUrl: "https://github.com/yourname/project-one",
    year: 2024,
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Another project you have built or contributed to.",
    tags: ["Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/yourname/project-two",
    year: 2023,
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "A third project showcasing a different skill set.",
    tags: ["Python", "Machine Learning"],
    year: 2023,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
