"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

export default function MobileNavs() {
  const pathname = usePathname();
  const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Accessible Title */}
      <SheetTitle />

      <SheetContent
        className="flex flex-col"
        // aria-labelledby="mobile-nav-title"
        aria-describedby={undefined}
      >
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ke<span className="text-accent">ll</span>y🧑🏾‍💻
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8 w-auto">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } capitalize font-medium hover:text-accent transition-all w-fit`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
