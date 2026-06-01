"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090611] px-6 text-white">

      {/* Dreamy Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute left-20 top-32 h-[250px] w-[250px] rounded-full bg-amber-300/10 blur-[120px]" />

        <div className="absolute right-20 bottom-32 h-[300px] w-[300px] rounded-full bg-fuchsia-400/10 blur-[120px]" />

      </div>

      {/* Floating Glow Lights */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_40px_10px_rgba(251,191,36,0.7)]"
      />

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_40px_10px_rgba(168,85,247,0.7)]"
      />

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-[20%] bottom-[25%] h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_40px_10px_rgba(244,114,182,0.7)]"
      />

      {/* Main Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
        >
          ✨ Every "What If?" Creates A New Reality
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold tracking-[0.25em] md:text-8xl"
        >
          ALTVERSE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300"
        >
          Explore forgotten histories, impossible futures,
          magical kingdoms, and worlds that never existed.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 w-full max-w-xl"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-2xl">
            <div className="flex items-center gap-2">

              <input
                type="text"
                placeholder="What if Rome never fell?"
                className="h-14 flex-1 bg-transparent px-5 text-white placeholder:text-gray-400 outline-none"
              />

              <button className="rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105">
                Explore
              </button>

            </div>
          </div>
        </motion.div>

        {/* Featured Reality Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
            FEATURED REALITY
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            India Colonized Britain
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            In 1702, the East Bharat Company gained control over London,
            reshaping culture, language and politics across Europe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}