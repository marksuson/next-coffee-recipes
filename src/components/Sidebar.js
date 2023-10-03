import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-56 bg-brown-300 fixed left-0 top-0 p-4 text-white">
      <Link href="/" className="text-2xl font-bold mb-4 block">
        Menu
      </Link>
      <ul>
        <li className="mb-2">
          <Link href="/hot-coffee">
            <span className="cursor-pointer">Hot Coffee</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/cold-coffee">
            <span className="cursor-pointer">Cold Coffee</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/login">
            <span className="cursor-pointer">Login / Register</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
