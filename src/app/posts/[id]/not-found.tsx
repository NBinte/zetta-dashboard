import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-p py-8">
      <div className="ui-card">
        <h1 className="ui-h1 mb-2">Post not found</h1>
        <p className="ui-muted">The post you’re looking for doesn’t exist.</p>
        <div className="mt-4">
          <Link href="/posts" className="ui-btn-ghost focus-visible:focus-ring">
            ← Back to Posts
          </Link>
        </div>
      </div>
    </main>
  );
}
