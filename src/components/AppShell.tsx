"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-dvh text-[--color-text]">
      <Header open={open} onToggle={() => setOpen((o) => !o)} />

      <div className="container-p">
        <div className="grid grid-cols-12 gap-6 py-6">
          {/* Sidebar */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.aside
                key="sidebar"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 260, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="col-span-12 overflow-hidden sm:col-span-4 lg:col-span-3"
                aria-label="Sidebar"
              >
                <Sidebar onNavigate={() => setOpen(false)} />
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main */}
          <main className={`col-span-12 ${open ? "sm:col-span-8 lg:col-span-9" : ""}`} role="main">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
