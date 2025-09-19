"use client";

import { motion } from "framer-motion";

type StatCardProps = {
  value: string | number;
  label: string;
  delay?: number; // seconds
};

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 22, delay }}
      className="ui-card ui-card-hover"
      role="status"
      aria-label={String(label)}
    >
      <div className="text-2xl font-bold">{value}</div>
      <p className="ui-muted">{label}</p>
    </motion.div>
  );
}
