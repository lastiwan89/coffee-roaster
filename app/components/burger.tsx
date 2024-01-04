"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="relative flex items-center justify-center md:hidden"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? (
        <Image src="/icon-close.svg" height={15} width={16} alt="close icon" />
      ) : (
        <Image
          src="/icon-hamburger.svg"
          width={16}
          height={15}
          alt="hamburger icon"
        />
      )}
      {isOpen && (
        <div className="bg-nav fixed right-0 top-[90px] flex h-full w-full flex-col gap-6 py-10">
          <Link
            className="hover:text-grey-light heading-h4 cursor-pointer text-center font-serif font-bold capitalize"
            href="/"
          >
            home
          </Link>
          <Link
            className="hover:text-grey-light heading-h4 cursor-pointer text-center font-serif font-bold capitalize"
            href="/about"
          >
            about us
          </Link>
          <Link
            className="hover:text-grey-light heading-h4 cursor-pointer text-center font-serif font-bold capitalize"
            href="/plan"
          >
            create your plan
          </Link>
        </div>
      )}
    </div>
  );
}
