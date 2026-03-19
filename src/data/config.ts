import type { SocialLink } from "@/types";

export const siteConfig = {
  name: "Your Name",
  tagline: "Software engineer building things on the web.",
  bio: "I write software, mostly frontend. Currently at [Company]. I care about performance, accessibility, and shipping work that holds up over time.",
  location: "City, State",
  email: "you@example.com",
  availableForWork: false,
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/yourname",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourname",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:you@example.com",
    icon: "email",
  },
];

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Writing", to: "/writing" },
];
