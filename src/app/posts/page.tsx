// src/app/posts/page.tsx
export const metadata = {
  title: "Posts | Zetta Dashboard",
  description: "Browse posts from JSONPlaceholder.",
};

export default function PostsPage() {
  return (
    <main className="container-p space-y-4 py-8">
      <h1 className="text-3xl font-bold">Posts</h1>
      <p className="text-[--color-muted]">
        This page will list posts. (Placeholder content for now.)
      </p>
    </main>
  );
}
