"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "Users" },
  ];

  return (
    <div className="ui-card h-full">
      <nav className="flex flex-col gap-2">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              className={`rounded-[--radius-lg] px-3 py-2 transition-colors ${
                active
                  ? "bg-[--color-surface-2] text-[--color-text]"
                  : "text-[--color-muted] hover:bg-[--color-surface-2]"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6">
        <div className="ui-badge ui-badge-accent">v1 • UI Focus</div>
      </div>
    </div>
  );
}
