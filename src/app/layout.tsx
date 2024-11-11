import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Rifki Alfian Nahar",
  description: "Rifki Alfian Nahar portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
