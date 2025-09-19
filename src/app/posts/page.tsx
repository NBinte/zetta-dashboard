import type { Metadata } from "next";
import PostsClient from "./PostsClient";

export const metadata: Metadata = {
  title: "Posts | Zetta Dashboard",
  description: "Posts from JSONPlaceholder displayed as reusable cards.",
};

export default function PostsPage() {
  return <PostsClient />;
}
