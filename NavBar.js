import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function NavBar() {
  const { user } = useUser();
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between">
      <Link href="/"><a className="font-bold text-xl">Smart Fridge</a></Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link href="/add"><a>Add Item</a></Link>
            <Link href="/recipes"><a>Recipes</a></Link>
            <a href="/api/auth/logout">Log out</a>
          </>
        ) : (
          <a href="/api/auth/login">Log in</a>
        )}
      </div>
    </nav>
  );
}
