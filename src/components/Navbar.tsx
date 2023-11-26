import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Suspense } from "react";
import OpenCart from "./cart/OpenCart";
import CartModal from "./cart/CartModal";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 h-20 w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl border-b">
      <div className="relative mx-auto max-w-screen-xl flex items-center justify-between p-4 lg:px-0">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="flex w-full items-center">
          <div className="flex justify-start w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <AppLogo />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                SUPERINDO
              </div>
            </Link>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense>
              <SearchBar />
            </Suspense>
          </div>
          <div className="flex justify-end md:w-1/3">
            <Suspense fallback={<OpenCart />}>
              <CartModal />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
