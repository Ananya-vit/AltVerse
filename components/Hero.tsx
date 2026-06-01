"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#090611] px-6 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

        <div className="absolute left-20 top-32 h-[250px] w-[250px] rounded-full bg-amber-300/10 blur-[120px]" />

        <div className="absolute right-20 bottom-20 h-[300px] w-[300px] rounded-full bg-fuchsia-400/10 blur-[120px]" />

      </div>

      {/* Floating Lights */}

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_50px_15px_rgba(251,191,36,0.5)]"
      />

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_50px_15px_rgba(168,85,247,0.5)]"
      />

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-[22%] bottom-[28%] h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_50px_15px_rgba(244,114,182,0.5)]"
      />

      {/* Main Content */}

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">

        {/* Tag */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.8 }}
          className="mb-6 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
        >
          ✨ Every "What If?" Creates A New Reality
        </motion.div>

        {/* Logo */}

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
          className="text-5xl font-bold tracking-[0.35em] md:text-7xl"
          style={{
            textShadow: "0 0 25px rgba(251,191,36,0.15)",
          }}
        >
          ALTVERSE
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
        >
          Every choice creates a different world.
          Explore the histories, futures and realities
          that never happened.
        </motion.p>

        {/* Magical Search Bar */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
          className="mt-12 w-full max-w-2xl"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-amber-300/20 via-purple-400/20 to-pink-400/20 blur-xl" />

            {/* Search Container */}

            <div className="relative flex items-center rounded-[32px] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-3xl">

              <input
                type="text"
                placeholder="What if Rome never fell?"
                className="h-16 flex-1 bg-transparent px-6 text-lg text-white placeholder:text-gray-400 outline-none"
              />

              <button
  onClick={() => router.push("/reality/test")}
  className="rounded-[24px] bg-gradient-to-r from-amber-300 to-yellow-400 px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
>
  ✨ Explore
</button>

            </div>

          </div>
        </motion.div>

        {/* Featured Reality Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="group relative mt-16 w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/20"
        >

          {/* Hover Glow */}

          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
            Featured Reality
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            India Colonized Britain
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed">
            "For two centuries, London existed under Indian imperial rule,
            transforming European culture, politics and language forever."
          </p>

          <button className="mt-6 text-amber-300 transition hover:translate-x-2">
            Explore Reality →
          </button>

        </motion.div>
      </div>
    </section>
  );
}