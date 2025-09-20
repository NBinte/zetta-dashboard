"use client";

import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButtons() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (status === "authenticated") {
    const img = session.user?.image ?? null;
    return (
      <div className="flex items-center gap-2">
        {img ? (
          <img
            src={img}
            alt="Avatar"
            className="h-8 w-8 rounded-full border border-[--color-line]"
          />
        ) : null}
        <Link href="/profile" className="ui-btn-ghost">
          Profile
        </Link>
        <button className="ui-btn" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button className="ui-btn" onClick={() => signIn("google", { callbackUrl: "/profile" })}>
      Sign in
    </button>
  );
}
