// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

        const user = {
          email: 'test@gmail.com',
          password: '1234',
        }

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          console.log("Yessssssssss")
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          console.log("hiiiiiiiiiiiiiiii")
          // eslint-disable-next-line no-console
          console.error(
            'Warning: Malicious login attempt registered, bad credentials provided'
          )

          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, credentials }) {
      // Check if the user is authenticated using credentials
      if (user) {
        // If credentials are valid, allow login and proceed to the redirect
        return true
      }
      // If user is not found or credentials are invalid, deny access
      return false
    },
    async redirect({ url, baseUrl }) {
      // Redirect the user to '/dashboard' after successful login
      if (url === baseUrl + '/login') {
        return baseUrl + '/dashboard' // Redirect to dashboard if login is successful
      }
      return url // Otherwise, use the default URL
    },
  },
})