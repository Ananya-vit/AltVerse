"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[94vw] max-w-[1200px] -translate-x-1/2">
      {/* Structural Glow */}
      <div className="absolute -inset-1 -z-10 rounded-xl bg-indigo-500/5 blur-xl pointer-events-none" />

      <div
        className="
          flex
          items-center
          justify-between
          px-5
          md:px-8
          py-3
          rounded-xl
          border
          border-white/10
          bg-slate-950/80
          backdrop-blur-xl
          shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(99,102,241,0.05)]
        "
      >
        {/* Left Side Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15] animate-pulse" />
          <span className="text-sm font-bold tracking-[0.25em] text-white transition-colors group-hover:text-yellow-200">
            ALTVERSE
          </span>
        </Link>

        {/* Center-Aligned Navigation Options */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-grow mx-8">
          {["Explore", "Realities", "Gallery", "Compare"].map((link) => (
            <Link
              key={link}
              href="/"
              className="
                text-xs
                font-medium
                text-white/60
                tracking-widest
                uppercase
                transition-all
                duration-200
                hover:text-white
                hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]
              "
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right Call To Action Button */}
        <button
          className="
            text-xs
            whitespace-nowrap
            rounded-lg
            border
            border-yellow-400/20
            bg-yellow-400/10
            px-4
            py-1.5
            text-yellow-300
            font-semibold
            tracking-wide
            transition-all
            duration-200
            hover:scale-[1.02]
            hover:bg-yellow-400/20
            hover:text-white
            active:scale-[0.97]
          "
        >
          Begin Exploring ✨
        </button>
      </div>
    </nav>
  );
}