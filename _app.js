import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NavBar />
      <main className="p-6 min-h-screen">
        <Component {...pageProps} />
      </main>
    </UserProvider>
  );
}
