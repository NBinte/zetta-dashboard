"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  id: number;
  title: string;
  body: string;
  delay?: number; // seconds
};

export default function PostCard({ id, title, body, delay = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 22, delay }}
      className="ui-card ui-card-hover flex h-full flex-col"
    >
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="ui-subtle line-clamp-3 flex-1">{body}</p>

      <div className="mt-4">
        <Link href={`/posts/${id}`} className="ui-btn-ghost">
          View Details
        </Link>
      </div>
    </motion.article>
  );
}
