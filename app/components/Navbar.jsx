import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Jika helpdesh logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>Jika Helpdesk</h1>
      <Link href="/">Dasboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
