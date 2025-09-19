import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Single NextAuth instance
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

// Expose handlers for App Router
export { handler as GET, handler as POST };
