"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-dvh text-[--color-text]">
      <Header open={open} onToggle={() => setOpen((o) => !o)} />

      <div className="container-p py-6">
        {/* Use FLEX, not grid → no reflow when width animates */}
        <div className="flex gap-6">
          {/* Sidebar stays mounted; width animates between 0 and 260 */}
          <motion.aside
            aria-label="Sidebar"
            aria-hidden={!open}
            initial={false}
            animate={{ width: open ? 260 : 0, opacity: open ? 1 : 0.0001 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="overflow-hidden"
            style={{ willChange: "width" }}
          >
            {/* Add padding inside so content doesn’t clip when narrow */}
            <div className="w-[260px]">
              <Sidebar onNavigate={() => setOpen(false)} />
            </div>
          </motion.aside>

          {/* Main content flexes to fill; min-w-0 prevents overflow pushing layout */}
          <main id="main" className="min-w-0 flex-1" role="main">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
