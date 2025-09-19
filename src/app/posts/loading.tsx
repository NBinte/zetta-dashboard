export default function LoadingPosts() {
  return (
    <main className="container-p py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="ui-card h-40 animate-pulse" />
        ))}
      </div>
    </main>
  );
}
