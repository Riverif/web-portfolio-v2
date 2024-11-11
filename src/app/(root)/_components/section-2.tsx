"use client";
import { HighlightedProject } from "@/components/highlighted-project";
import { cn } from "@/lib/utils";
import { Hammersmith_One } from "next/font/google";

const hammersmith_one = Hammersmith_One({ subsets: ["latin"], weight: "400" });

export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  techstack: string[];
  hosted?: string;
  url: string;
}

const highlightedProjects: Project[] = [
  {
    title: "Lakara Bercerita - Article with CMS",
    imageUrl: "/projects/lakara.png",
    description: `Lakara Bercerita is article website that tells the story of the author's life during his lifetime. This website has a CMS feature to create new articles. Has good responsiveness to various devices.`,
    features: [
      "User authentication & authorization",
      "Content Management System",
      "Comment & reply comment",
      "Like article & like comment",
    ],
    techstack: [
      "Next.Js",
      "Auth.Js",
      "React.Js",
      "Tailwind",
      "Typescript",
      "PostgreSQL",
      "Prisma ORM",
    ],
    hosted: "VPS, Ubuntu 24.04, Nginx, Certbot",
    url: "https://lakarabercerita.my.id/",
  },
  {
    title: "LMS Rifki's Course",
    imageUrl: "/projects/lms.png",
    description:
      "LMS Rifki Code is designed to be easily understood by individuals looking to learn hard skills. The system includes a Content Management System (CMS) that organizes each course into several chapters for a structured learning experience. It is integrated with Stripe to facilitate seamless payment processes, ensuring an efficient learning journey for students.",
    features: [
      "User authentication & authorization",
      "Course Management System",
      "Stripe integration",
    ],
    techstack: [
      "Next.Js",
      "Auth.Js",
      "React.Js",
      "Tailwind",
      "Typescript",
      "PostgreSQL (Neon.Tech serverless)",
      "Prisma ORM",
      "Uploadthing",
      "Stripe",
      "Shadcn",
      "Axios",
      "Zustand",
    ],
    hosted: "Vercel",
    url: "https://github.com/Riverif/lms-system-v1",
  },

  {
    title: "Arsys - Thesys System Administration",
    imageUrl: "/projects/arsys.png",
    description: `Arsys is a web-based administrative system for thesis management at the Fakultas Pendidikan Teknologi dan Kejuruan (FPTK) at Universitas Pendidikan Indonesia (UPI). Developed using the Laravel framework, Arsys facilitates the submission of thesis proposals, monitoring progress, and scheduling defenses for senior students. However, Laravel has seen declining popularity due to its complex structure and diminishing use of PHP. In contrast, Next.js, a framework built on React.js, is favored for its simplicity and effectiveness in front-end development. This study analyzes the pros and cons of transitioning from Laravel to Next.js for Arsys and includes user testing with students familiar with the existing system. The findings indicate that Next.js provides significant advantages over Laravel in developing Arsys.`,
    features: [
      "User authentication",
      "3 level authorization",
      "Proposal & Thesys administration",
      "Chat with lecturer",
    ],
    techstack: [
      "Next.Js",
      "Auth.Js",
      "React.Js",
      "Tailwind",
      "Typescript",
      "PostgreSQL (Neon.Tech serverless)",
      "Prisma ORM",
    ],
    hosted: "Vercel",
    url: "https://github.com/Riverif/arsys-2024-final-v1",
  },
];

export const Section2 = () => {
  return (
    <div className="h-fit justify-between px-4 py-6 md:px-12">
      <div className="absolute hidden h-[250vh] md:block">
        <p
          className={cn(
            "sticky top-0 pt-5 text-xl text-gray-800",
            hammersmith_one.className,
          )}
        >
          Highlighted Project
        </p>
      </div>
      {highlightedProjects.map((project, i) => (
        <HighlightedProject key={i} project={project} />
      ))}
    </div>
  );
};
