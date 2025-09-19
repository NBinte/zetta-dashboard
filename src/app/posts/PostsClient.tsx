"use client";

import { useFetch } from "@/hooks/useFetch";
import type { Post } from "@/types/posts";
import PostCard from "@/components/PostCard";

export default function PostsClient() {
  const { data, loading, error, status, refetch, simulateError } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return (
    <div className="section space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="ui-h1">Posts</h1>
          <p className="ui-muted">Reusable card grid with staggered entrance.</p>
        </div>
        <div className="flex gap-3">
          <button className="ui-btn-ghost" onClick={refetch}>
            Refetch
          </button>
          <button className="ui-btn" onClick={simulateError}>
            Simulate Error
          </button>
        </div>
      </header>

      {loading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="ui-card h-40 animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <div className="ui-card border border-[--color-error]/40">
          <div className="mb-1 font-semibold">Failed to load posts</div>
          <p className="ui-muted text-sm">{error.message || "Please try again."}</p>
          <div className="mt-3 flex gap-3">
            <button className="ui-btn" onClick={refetch}>
              Retry
            </button>
          </div>
        </div>
      )}

      {status === "success" && data && (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 12).map((p, idx) => (
            <PostCard
              key={p.id}
              id={p.id}
              title={capitalize(p.title)}
              body={p.body}
              delay={0.02 + idx * 0.04}
            />
          ))}
        </section>
      )}
    </div>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
