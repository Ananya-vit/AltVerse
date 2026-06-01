"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6"
    >
      <div className="mx-auto mt-5 max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 backdrop-blur-2xl">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.9)]" />

            <h1 className="text-lg font-semibold tracking-[0.35em] text-white">
              ALTVERSE
            </h1>
          </motion.div>

          {/* Center Nav */}
          <div className="hidden md:flex items-center gap-10">

            <button className="group relative text-gray-300 transition">
              Explore
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-amber-300 transition-all duration-300 group-hover:w-full" />
            </button>

            <button className="group relative text-gray-300 transition">
              Realities
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-amber-300 transition-all duration-300 group-hover:w-full" />
            </button>

            <button className="group relative text-gray-300 transition">
              Gallery
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-amber-300 transition-all duration-300 group-hover:w-full" />
            </button>

            <button className="group relative text-gray-300 transition">
              Compare
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-amber-300 transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-full border border-amber-300/20 bg-gradient-to-r from-amber-300/15 to-yellow-500/15 px-5 py-2 text-sm font-medium text-amber-100 backdrop-blur-xl"
          >
            Begin Exploring
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}