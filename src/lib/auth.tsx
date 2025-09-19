import { getServerSession } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

// Define config again here for getServerSession
// (v5 doesn’t expose authOptions by default)
const authConfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export async function getSession() {
  return getServerSession(authConfig);
}
