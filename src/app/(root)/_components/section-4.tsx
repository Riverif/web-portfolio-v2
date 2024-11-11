"use client";
import { ExpandButton2 } from "@/components/expand-button-2";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Phone } from "lucide-react";
import { Hammersmith_One } from "next/font/google";
import Link from "next/link";

const hammersmith_one = Hammersmith_One({ subsets: ["latin"], weight: "400" });

export const Section4 = () => {
  return (
    <div
      id="contact"
      className="flex h-screen flex-col items-center justify-center gap-4 px-4 py-6 pb-32 md:px-12"
    >
      <p className={cn("text-xl text-gray-800", hammersmith_one.className)}>
        {"Talk to Rifki"}
      </p>
      <div className="flex w-[250px] justify-center rounded-xl border-2 border-black p-2">
        <ExpandButton2 />
      </div>
      <div className="flex justify-between gap-8">
        <Link
          href="https://github.com/Riverif"
          className="transition-opacity hover:opacity-50"
        >
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rifkialfiannahar/"
          className="transition-opacity hover:opacity-50"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://www.instagram.com/rifkialfiannahar/"
          className="transition-opacity hover:opacity-50"
        >
          <Instagram />
        </Link>
        <Link
          href="https://wa.me/6285157112297"
          className="transition-opacity hover:opacity-50"
        >
          <Phone />
        </Link>
      </div>
    </div>
  );
};
