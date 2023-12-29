import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <main className="h-screen w-56 bg-brown-300 fixed left-0 top-0 p-4 text-white">
      <header className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-6 block">
          Menu
        </Link>
        {!isHomePage && (
          <Link href="/" className="text-2xl font-bold mb-6 pr-2 block">
            &#8592; {/* This is a left arrow symbol */}
          </Link>
        )}
      </header>
      <ul>
        <li className="mb-4">
          <Link href="/hot-coffee">
            <span className="cursor-pointer">Hot Coffee</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/iced-coffee">
            <span className="cursor-pointer">Iced Coffee</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/login">
            <span className="cursor-pointer">Login / Register</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
