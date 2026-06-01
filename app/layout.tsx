import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/app/globals.css"; // Double check this line matches your exact app/ location

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AltVerse - Explore Alternate Realities",
  description: "Generate and explore beautiful alternate history and sci-fi realities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#050515]">
      <body className={`${inter.className} relative min-h-screen text-white antialiased overflow-x-hidden`}>
        <div className="w-full z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}