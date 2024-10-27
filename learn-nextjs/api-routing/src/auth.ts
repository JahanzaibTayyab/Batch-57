import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const baseURL = process.env.AUTH_URL;
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("🚀 ~ authorize: ~ credentials:", credentials);
        let user = null;

        const result = await fetch(`${baseURL}api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          cache: "no-store",
        });
        if (result.ok) {
          const response = await result.json();
          user = response.user;
        }

        if (!user) {
          throw new Error("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
    Google,
  ],
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      return isAuthenticated;
    },
    async signIn({ user }) {
      // Custom logic to handle sign-in events
      // Must return true to indicate successful sign-in
      if (user) {
        return true;
      }
      return false;
    },

    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session) {
        token.name = session.user.name;
      }

      if (user) {
        //await getUserByCognitoById(user?.sub);
        // const sessionUser = {
        //   id: data.id,
        //   cognito_id: user?.sub,
        //   firstName: user?.given_name,
        //   lastName: user?.family_name,
        //   name: `${user?.given_name} ${user?.family_name}`,
        //   role: user.role ?? data.role,
        //   status: data.status,
        //   inviteStatus: data.inviteStatus,
        //   email: user?.email,
        // };
        token.user = { ...user };
        // token.accessToken = user?.AccessToken;
        // token.idToken = user?.IdToken as string;
      }
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token.user as any;
      return session;
    },
  },
});
