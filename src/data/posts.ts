import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "first-post",
    title: "Your First Post Title",
    date: "2024-11-01",
    description:
      "A brief description of what this post is about, shown in the listing.",
    tags: ["thoughts", "engineering"],
  },
  {
    slug: "second-post",
    title: "Something You Learned Recently",
    date: "2024-09-15",
    description:
      "Notes from digging into a topic, a bug you tracked down, or a technique you found useful.",
    tags: ["engineering"],
  },
];

export const recentPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);
