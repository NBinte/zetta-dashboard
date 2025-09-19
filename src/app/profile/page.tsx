import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export const metadata = {
  title: "Profile | Zetta Dashboard",
  description: "Protected user profile",
};

export default async function ProfilePage() {
  const session = await getSession(); // server-side session check

  if (!session) {
    // bounce unauthenticated users to NextAuth sign-in
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  const user = session.user;

  return (
    <main className="container-p space-y-6 py-8">
      <div className="flex items-center justify-between gap-3">
        <h1 className="ui-h1">Your Profile</h1>

        {/* NextAuth prefers POST for sign-out */}
        <form action="/api/auth/signout" method="post">
          <button type="submit" className="ui-btn-ghost">
            Sign out
          </button>
        </form>
      </div>

      <div className="ui-card space-y-3">
        <div>
          <span className="font-semibold">Name:</span> {user?.name ?? "—"}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {user?.email ?? "—"}
        </div>

        {user?.image ? (
          <img
            src={user.image}
            alt="Avatar"
            className="h-16 w-16 rounded-full border border-[--color-line]"
          />
        ) : null}
      </div>
    </main>
  );
}
