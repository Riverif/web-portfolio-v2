"use client";
import { Project } from "@/components/project";
import { cn } from "@/lib/utils";
import { Hammersmith_One } from "next/font/google";

const hammersmith_one = Hammersmith_One({ subsets: ["latin"], weight: "400" });

export const Section3 = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen justify-between px-4 py-6 pb-32 md:px-12">
      <div className="absolute h-[100vh]">
        <p
          className={cn(
            "pt-5 text-xl text-gray-800",
            hammersmith_one.className,
          )}
        >
          {"Rifki's Project"}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 pt-[150px] md:grid-cols-3">
        {arr.map((item) => (
          <Project key={item}></Project>
        ))}
      </div>
    </div>
  );
};
