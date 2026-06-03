"use client";

import Link from "next/link";

const links = [
  {
    label: "Explore",
    href: "/#explore",
  },
  {
    label: "Realities",
    href: "/my-realities",
  },
  {
    label: "Gallery",
    href: "/#featured",
  },
  {
    label: "Compare",
    href: "/compare",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[95vw] max-w-[1500px] -translate-x-1/2">

      {/* Background Glow */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-indigo-500/10 blur-3xl" />

      <div
        className="
          flex
          items-center
          justify-between
          px-8
          md:px-12
          py-4
          rounded-3xl
          border
          border-white/10
          bg-black/20
          backdrop-blur-2xl
          shadow-[0_0_60px_rgba(99,102,241,0.15)]
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />

          <span
            className="
              text-lg
              md:text-xl
              font-black
              tracking-[0.35em]
              text-white
            "
          >
            ALTVERSE
          </span>

        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-12">

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                text-sm
                tracking-[0.2em]
                uppercase
                text-white/70
                transition-all
                duration-300
                hover:text-white
                hover:-translate-y-0.5
              "
            >
              {link.label}
            </Link>
          ))}

        </div>

        {/* CTA */}
        <Link
          href="/#explore"
          className="
            rounded-full
            border
            border-amber-300/20
            bg-amber-300/10
            px-5
            py-2.5
            text-xs
            font-semibold
            tracking-[0.15em]
            uppercase
            text-amber-200
            shadow-[0_0_20px_rgba(251,191,36,0.15)]
            transition-all
            duration-300
            hover:scale-105
            hover:bg-amber-300/20
            hover:shadow-[0_0_35px_rgba(251,191,36,0.3)]
          "
        >
          Begin Exploring ✨
        </Link>

      </div>

    </nav>
  );
}