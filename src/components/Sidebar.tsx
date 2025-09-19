"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="sticky top-0 h-dvh border-r border-brand-line/60 bg-brand-surface/60 backdrop-blur-md">
      <div className="p-3">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full rounded-xl2 border border-brand-line/60 px-3 py-2 text-left text-sm text-brand-dim hover:border-brand-mint/50 hover:shadow-soft"
        >
          {open ? "Collapse" : "Expand"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="nav"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 240, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="overflow-hidden"
          >
            <ul className="px-3 py-2 space-y-2">
              {[
                { href: "/", label: "Dashboard" },
                { href: "/posts", label: "Posts" },
                { href: "/users", label: "Users" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl2 border border-brand-line/60 px-3 py-2 hover:border-brand-mint/50 hover:shadow-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </aside>
  );
}
