import Link from "next/link";
import Logo from "./logo";
import Burger from "./burger";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex md:flex-row md:gap-6">
        <Link
          className="text-12 text-grey-light hover:text-grey-dark cursor-pointer text-center font-sans font-bold uppercase"
          href="/"
        >
          home
        </Link>
        <Link
          className="text-12 text-grey-light hover:text-grey-dark cursor-pointer text-center font-sans font-bold uppercase"
          href="/about"
        >
          about us
        </Link>
        <Link
          className="text-12 text-grey-light hover:text-grey-dark cursor-pointer text-center font-sans font-bold uppercase"
          href="/plan"
        >
          create your plan
        </Link>
      </div>
      <Burger />
    </nav>
  );
}
