import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Suspense } from "react";
import OpenCart from "./cart/OpenCart";
import CartModal from "./cart/CartModal";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 p-3 h-20 w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl border-b">
      <div className="relative h-full mx-auto max-w-screen-xl grid grid-cols-4">
        <div className="col-span-1 flex flex-col justify-center">
          <Link href="/" className="relative flex items-center space-x-1">
            <AppLogo />
            <h1 className="font-bold hidden md:block">SUPERINDO</h1>
          </Link>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center">
          <SearchBar />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-end">
          <Suspense fallback={<OpenCart />}>
            <CartModal />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
