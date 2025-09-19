import type { Metadata } from "next";
import Link from "next/link";
import type { Post } from "@/types/posts";

type Params = { id: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return {
    title: `Post #${params.id} | Zetta Dashboard`,
    description: `Details for post ${params.id} from JSONPlaceholder.`,
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" }, // simple & safe for the test
  );

  if (!res.ok) {
    return (
      <main className="container-p py-8">
        <div className="ui-card border border-[--color-error]/40">
          <h1 className="ui-h1 mb-2">Post {params.id}</h1>
          <p className="ui-muted">Failed to load this post.</p>
          <div className="mt-4">
            <Link href="/posts" className="ui-btn-ghost focus-visible:focus-ring">
              ← Back to Posts
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const post: Post = await res.json();

  return (
    <main className="container-p space-y-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="ui-h1">Post {post.id}</h1>
        <Link href="/posts" className="ui-btn-ghost focus-visible:focus-ring">
          ← Back
        </Link>
      </div>

      <article className="ui-card space-y-3">
        <h2 className="text-xl font-semibold">{capitalize(post.title)}</h2>
        <p className="ui-muted leading-relaxed">{post.body}</p>
        <span className="ui-badge">User ID: {post.userId}</span>
      </article>
    </main>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
