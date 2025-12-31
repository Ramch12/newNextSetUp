import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleAuthProvider from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verifyOtp`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
                otp: credentials.otp,
              }),
            }
          );
          if (!res.ok) {
            return null;
          }
          const data = await res.json();
          return {
            id: data.user.id || data.user._id,
            email: data.user.email,
            name: data.user.name,
            image: data.user.profilePic,
            backendToken: data.authtoken,
          };
        } catch (error) {
          console.log("Loggged In Error", error);
        }
      },
    }),
    GoogleAuthProvider({
      client: "Google",
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.backendToken = user.backendToken;
        token.role = user.role;
        // token.picture = picture;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.backendToken = token.backendToken;
      // session.user.picture = token.picture;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
