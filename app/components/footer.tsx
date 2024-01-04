import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { SOCIAL_ICON } from "@/constant";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-grey-dark mx-auto flex flex-col items-center gap-12 py-14 lg:flex-row lg:justify-start lg:px-20">
      <div>
        <Logo color="#ffff" />
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <Link
          className="body-nav text-grey-light hover:text-cream-light cursor-pointer text-center font-sans font-bold uppercase"
          href="/"
        >
          home
        </Link>
        <Link
          className="body-nav text-grey-light hover:text-cream-light cursor-pointer text-center font-sans font-bold uppercase"
          href="/about"
        >
          about us
        </Link>
        <Link
          className="body-nav text-grey-light hover:text-cream-light cursor-pointer text-center font-sans font-bold uppercase"
          href="/plan"
        >
          create your plan
        </Link>
      </div>
      <div className="flex gap-6 lg:ml-auto">
        {SOCIAL_ICON.map((icon) => (
          <Image
            key={icon.id}
            src={icon.url}
            alt={icon.label}
            width={24}
            height={24}
          />
        ))}
      </div>
    </footer>
  );
}
