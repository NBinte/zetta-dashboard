import StatCard from "@/components/StatCard";

export const metadata = {
  title: "Dashboard | Zetta",
  description: "Mini dashboard home",
};

export default function HomePage() {
  return (
    <div className="section space-y-6">
      <section>
        <h1 className="ui-h1 mb-2">Welcome</h1>
        <p className="ui-muted">
          Navigate via the sidebar. Posts and Users are wired for later steps.
        </p>
      </section>

      {/* Staggered cards (meaningful animation) */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <StatCard value={100} label="Total Posts" delay={0.02} />
        <StatCard value={10} label="Active Users" delay={0.08} />
        <StatCard value={12} label="Errors Resolved" delay={0.14} />
      </section>
    </div>
  );
}
