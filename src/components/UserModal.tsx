"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
    company?: { name: string; catchPhrase?: string };
    address?: { city?: string; street?: string; suite?: string };
  } | null;
};

export default function UserModal({ open, onClose, user }: Props) {
  return (
    <AnimatePresence>
      {open && user && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Modal */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="ui-card absolute top-10 left-1/2 w-[min(720px,92vw)] -translate-x-1/2"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <button className="ui-btn-ghost" onClick={onClose}>
                Close
              </button>
            </div>

            <div className="ui-muted grid gap-3 sm:grid-cols-2">
              <div>
                <span className="font-semibold text-[--color-text]">Email:</span> {user.email}
              </div>
              <div>
                <span className="font-semibold text-[--color-text]">Phone:</span> {user.phone}
              </div>
              <div>
                <span className="font-semibold text-[--color-text]">Username:</span> {user.username}
              </div>
              <div>
                <span className="font-semibold text-[--color-text]">Website:</span> {user.website}
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-[--color-text]">Company:</span>{" "}
                {user.company?.name}
                {user.company?.catchPhrase ? ` — “${user.company.catchPhrase}”` : ""}
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-[--color-text]">Address:</span>{" "}
                {user.address?.street}, {user.address?.suite}, {user.address?.city}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
