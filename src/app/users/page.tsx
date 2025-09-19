import type { Metadata } from "next";
import UsersClient from "./UsersClient";

export const metadata: Metadata = {
  title: "Users | Zetta Dashboard",
  description: "Users table with animated modal.",
};

export default function UsersPage() {
  return <UsersClient />;
}
