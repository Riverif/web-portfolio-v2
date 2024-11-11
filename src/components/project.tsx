"use client";

import { Hammersmith_One } from "next/font/google";
import { cn } from "@/lib/utils";

const hammersmith_one = Hammersmith_One({ subsets: ["latin"], weight: "400" });

export const Project = () => {
  return (
    <div className="space-y-2">
      <div className="relative aspect-video w-full cursor-pointer">
        <div className="absolute z-10 aspect-video w-full rounded-xl bg-sky-400 transition-opacity duration-500 hover:opacity-0"></div>
        <div className="absolute z-0 aspect-video w-full rounded-xl bg-fuchsia-400"></div>
      </div>
      <div>
        <h2 className={cn("text-xl", hammersmith_one.className)}>
          ARSYS - System Administration
        </h2>
        <p>Description</p>
      </div>
    </div>
  );
};
