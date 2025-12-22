import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            // Login failed
            return null;
          }
          const data = await res.json();

          return {
            id: data.user.id || data.user._id,
            email: data.user.email,
            name: data.user.name,
            role: data.user.role,
            image: data.user.image,
            backendToken: data.token, // Your backend JWT token
          };
        } catch (error) {}
      },
    }),
  ],
  callbacks: () => {},
  pages: {
    signIn: "/login",
    // signOut: '/auth/signout',
    // error: '/auth/error',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
