import Image from "next/image";
import Link from "next/link";
import Logo from "../components/helpdesk-logo.png";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <Image
          src={Logo}
          alt="Help Desk Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
