// middleware/auth.js
export default function ({ store, redirect }) {
  // Check if the user is authenticated (for example, check if a token exists)
  const isAuthenticated = store.state.auth.loggedIn;

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return redirect("/login");
  }
}
