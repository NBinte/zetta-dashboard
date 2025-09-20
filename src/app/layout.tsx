import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import SkipLink from "@/components/SkipLink";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Zetta Dashboard",
    template: "%s | Zetta Dashboard",
  },
  description: "UI-focused mini dashboard built with Next.js 15, Tailwind v4, Framer Motion.",
  robots: "index,follow",
  metadataBase: new URL("https://zetta-dashboard.vercel.app"),
  openGraph: {
    type: "website",
    title: "Zetta Dashboard",
    description: "UI-focused mini dashboard",
    url: "https://zetta-dashboard.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
