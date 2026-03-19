export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
  imageUrl?: string;
  year: number;
  featured?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  url?: string;
  externalUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "email" | "rss";
}
