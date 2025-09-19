"use client";

import Link from "next/link";

type Props = { open: boolean; onToggle: () => void };

export default function Header({ open, onToggle }: Props) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-transparent">
      <div className="container-p flex items-center justify-between py-4">
        {/* Brand */}
        <Link
          href="/"
          className="focus-visible:focus-ring flex items-center gap-2 font-bold tracking-wide"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[--color-accent]" />
          Zetta<span className="text-[--color-muted]">Dashboard</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <Link className="ui-btn-ghost focus-visible:focus-ring" href="/posts">
            Posts
          </Link>
          <Link className="ui-btn-ghost focus-visible:focus-ring" href="/users">
            Users
          </Link>
        </nav>

        {/* Sidebar toggle (mobile + desktop) */}
        <button
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          onClick={onToggle}
          className="ui-btn focus-visible:focus-ring"
        >
          {open ? "Hide Menu" : "Show Menu"}
        </button>
      </div>
    </header>
  );
}
