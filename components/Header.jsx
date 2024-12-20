import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNavs from "./MobileNav";

const Header = () => {
  return (
    <header className="px-6 xl:px-0 py-8 xl:py-12 px-4 xl:px-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl xl:text-4xl font-senibold">
            Ke<span className="text-accent">ll</span>y🧑🏾‍💻
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me Button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNavs />
        </div>
      </div>
    </header>
  );
};

export default Header;
