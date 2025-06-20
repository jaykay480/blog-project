"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-500">
      <div className="relative group flex items-center justify-between gap-1">
        <Image src={"/logo.png"} alt="" width={25} height={25} />
        <Link
          href="/"
          className="text-lamaPurple hover:text-gray-400 no-underline"
        >
          BlogInn
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lamaYellow transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/bloglist"
          className="relative group text-lamaPurple hover:text-gray-400 no-underline"
        >
          Topics
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lamaYellow transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <div className="w-[1px] h-4 bg-lamaYellow mx-2 " />
        <Link
          href="/about"
          className="relative group text-lamaPurple hover:text-gray-400 no-underline"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lamaYellow transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div className="w-[1px] h-4 bg-lamaYellow mx-2" />
        <Link
          href="/contact"
          className="relative group text-lamaPurple hover:text-gray-400 no-underline"
        >
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lamaYellow transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
