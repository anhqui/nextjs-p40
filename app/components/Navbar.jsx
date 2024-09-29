import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <h1>Help Desk App</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
