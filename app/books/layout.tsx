import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avenue du Livre",
  description: "Avenue du Livre : le site de référencement des livres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(inter.className, "h-full flex flex-col justify-between")}
      >
        {children}
      </body>
    </html>
  );
}
