"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-500">
      <div className="flex items-center justify-between gap-1">
        <Image src={"/logo.png"} alt="" width={25} height={25} />
        <Link
          href="/"
          className="text-lamaPurple hover:text-gray-400 no-underline"
        >
          BlogInn
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Link
          href="/bloglist"
          className="text-lamaPurple hover:text-gray-400 no-underline "
        >
          Topics
        </Link>
        <Link
          href="/about"
          className="text-lamaPurple hover:text-gray-400 no-underline "
        >
          About
        </Link>
        <Link
          href="/contact"
          className=" text-lamaPurple hover:text-gray-400 no-underline "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
