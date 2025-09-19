"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import UserModal from "@/components/UserModal";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company?: { name: string; catchPhrase?: string };
  address?: { city?: string; street?: string; suite?: string };
};

export default function UsersClient() {
  const { data, loading, error, status, refetch, simulateError } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  const [active, setActive] = useState<User | null>(null);

  return (
    <div className="section space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="ui-h1">Users</h1>
          <p className="ui-muted">Responsive table with an animated details modal.</p>
        </div>
        <div className="flex gap-3">
          <button className="ui-btn-ghost" onClick={refetch}>
            Refetch
          </button>
          <button className="ui-btn" onClick={simulateError}>
            Simulate Error
          </button>
        </div>
      </header>

      {/* Loading */}
      {loading && <div className="ui-card h-48 animate-pulse" />}

      {/* Error */}
      {error && (
        <div className="ui-card border border-[--color-error]/40">
          <div className="mb-1 font-semibold">Failed to load users</div>
          <p className="ui-muted text-sm">{error.message || "Please try again."}</p>
          <div className="mt-3">
            <button className="ui-btn" onClick={refetch}>
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      {status === "success" && data && (
        <div className="ui-card overflow-x-auto">
          <table className="ui-table min-w-[720px]">
            <thead>
              <tr>
                <th>Name</th>
                <th className="hidden sm:table-cell">Email</th>
                <th className="hidden sm:table-cell">Company</th>
              </tr>
            </thead>
            <tbody>
              {data.map((u) => (
                <tr key={u.id} className="cursor-pointer" onClick={() => setActive(u)}>
                  <td className="font-medium">{u.name}</td>
                  <td className="hidden sm:table-cell">{u.email}</td>
                  <td className="hidden sm:table-cell">{u.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <UserModal open={!!active} onClose={() => setActive(null)} user={active} />
    </div>
  );
}
