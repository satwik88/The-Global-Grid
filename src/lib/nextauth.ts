import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!user.email) return false;
        
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            console.log("Creating new Google user:", user.email);
            await prisma.user.create({
              data: {
                email: user.email,
                nickname: user.name || user.email.split("@")[0],
                avatar_url: user.image || null,
                provider: "google",
              },
            });
          } else {
            console.log("Found existing user:", existingUser.email);
          }
          return true;
        } catch (error) {
          console.error("Error in Google signIn callback:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      // If we need the real DB ID, fetch it
      if (token.email && !token.dbId) {
        const dbUser = await prisma.user.findUnique({ where: { email: token.email }});
        if (dbUser) {
          token.dbId = dbUser.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.dbId) {
        (session.user as any).id = token.dbId as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
