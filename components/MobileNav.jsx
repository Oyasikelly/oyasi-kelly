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
import { useState } from "react";
export default function MobileNavs() {
  const [isOpen, setIsOpen] = useState(false); // Initially closed

  const pathname = usePathname();
  const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  const handleToggleSheet = () => {
    setIsOpen((prev) => !prev); // Toggle open/close state
  };

  const handleCloseSheet = () => {
    setIsOpen(false); // Close the sheet when content is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries
          className="text-[32px] text-accent"
          onClick={handleToggleSheet}
        />
      </SheetTrigger>

      {/* Accessible Title */}
      <SheetTitle />

      <SheetContent
        className="flex flex-col"
        // aria-labelledby="mobile-nav-title"
        aria-describedby={undefined}
        onClick={handleCloseSheet}
      >
        {/* Logo */}
        <div className="mt-20 mb-20 text-center text-2xl">
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
