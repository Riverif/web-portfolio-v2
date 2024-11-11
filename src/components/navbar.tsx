"use client";
import Link from "next/link";
import { ExpandButton } from "./expand-button";

export const Navbar = () => {
  return (
    <div className="hidden w-full items-center justify-end gap-2 text-sm md:flex">
      {/* <Link href="#home" className=" hover:text-gray-400 transition-colors">
        Home
      </Link>
      -
      <Link href="#home" className=" hover:text-gray-400 transition-colors">
        Highlighted Project
      </Link>
      -
      <Link href="#home" className=" hover:text-gray-400 transition-colors">
        Who is Rifki
      </Link>
      -
      <Link href="#home" className=" hover:text-gray-400 transition-colors">
        Project
      </Link>
      -
      <Link href="#home" className=" hover:text-gray-400 transition-colors">
        Talk to Rifki
      </Link> */}
      <Link href="#contact" className="flex w-[160px] justify-center">
        <ExpandButton />
        {/* <button className="rounded-xl bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-600">
          Contact Me
        </button> */}
      </Link>
    </div>
  );
};
