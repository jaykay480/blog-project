"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-500 p-4 sticky top-0 drop-shadow-xl z-10 rounded-md">
      <div className="max-w-prose mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-gray-600 grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-cyan-600 hover:text-gray-400 no-underline "
          >
            Home page
          </Link>
        </h1>
        <h2>
          <Link
            href="/bloglist"
            className="text-cyan-600 hover:text-gray-400 no-underline "
          >
            Blog page
          </Link>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
