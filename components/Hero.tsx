"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import DreamySearchBar from "./DreamySearchBar";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  const handleSearch = (query: string) => {
    const slug = query
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    router.push(`/reality/${slug}`);
  };

 const realities = [
  {
    title: "Rome Never Fell",
    subtitle: "Eternal Empire",
    color: "amber",
    pos: "left-[6%] top-[68%]",
  },
  {
    title: "AI Ruled Earth",
    subtitle: "Machine Civilization",
    color: "cyan",
    pos: "left-[30%] top-[68%]",
  },
  {
    title: "India Colonized Britain",
    subtitle: "Reversed Empire",
    color: "yellow",
    pos: "left-[54%] top-[68%]",
  },
  {
    title: "Dinosaurs Survived",
    subtitle: "Lost Evolution",
    color: "green",
    pos: "left-[78%] top-[68%]",
  },
];
const floatClasses = [
  "float-card-1",
  "float-card-2",
  "float-card-3",
  "float-card-4",
];
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
  src="/hero-world.png"
  alt="AltVerse"
  fill
  priority
  className="object-cover object-center scale-110 blur-[5px] opacity-75"
/>
<Image
  src="/hero-world.png"
  alt="AltVerse"
  fill
  priority
  className="object-cover object-center opacity-35"
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050515]" />

      {/* Stars */}
      <div className="absolute left-[12%] top-[22%] text-yellow-300/70 text-xl animate-pulse">✦</div>
      <div className="absolute right-[18%] top-[28%] text-cyan-300/60 text-lg animate-pulse">✦</div>
      <div className="absolute left-[48%] top-[55%] text-white/60 text-2xl animate-pulse">✦</div>
      <div className="absolute right-[22%] bottom-[22%] text-purple-300/60 text-xl animate-pulse">✦</div>
      <div className="absolute left-[25%] bottom-[18%] text-yellow-200/60 text-xl animate-pulse">✦</div>
        <div className="absolute left-[18%] top-[45%] text-yellow-300/50 animate-pulse">
  ✦
</div>

<div className="absolute left-[72%] top-[50%] text-cyan-300/50 animate-pulse">
  ✦
</div>

<div className="absolute left-[42%] bottom-[18%] text-white/40 animate-pulse">
  ✦
</div>

<div className="absolute right-[12%] bottom-[22%] text-purple-300/50 animate-pulse">
  ✦
</div>
{/* Floating orbs */}
<div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-cyan-300 blur-md animate-pulse" />

<div className="absolute right-[20%] top-[30%] h-3 w-3 rounded-full bg-yellow-300 blur-md animate-pulse" />

<div className="absolute left-[70%] bottom-[30%] h-2 w-2 rounded-full bg-purple-300 blur-md animate-pulse" />

<div className="absolute left-[25%] bottom-[20%] h-2 w-2 rounded-full bg-white blur-md animate-pulse" />
      
    <div className="absolute left-[18%] top-[20%] text-yellow-300/50 text-xl animate-pulse">
  ✦
</div>

<div className="absolute right-[15%] top-[40%] text-cyan-300/50 text-lg animate-pulse">
  ✦
</div>

<div className="absolute left-[75%] bottom-[25%] text-purple-300/50 text-xl animate-pulse">
  ✦
</div>
{/* Center Content */}
      <motion.div
  initial={{
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.5,
    ease: "easeOut",
  }}
  className="relative z-20 flex flex-col items-center pt-52"
>

        <div className="mb-5 rounded-full border border-white/10 bg-black/20 px-5 py-2 text-xs tracking-[0.25em] text-white/70 backdrop-blur-xl">
          ✨ EVERY "WHAT IF?" CREATES A NEW REALITY
        </div>

        <h1
          className="text-6xl md:text-[90px] font-black tracking-[0.25em] text-white"
          style={{
            textShadow: "0 0 40px rgba(255,255,255,0.15)",
          }}
        >
          ALTVERSE
        </h1>

        <p className="mt-4 text-white/70 tracking-[0.3em] uppercase text-xs md:text-sm">
          Generate and Explore Alternate Realities
        </p>

        <div className="mt-12 w-full max-w-6xl px-4">
          <DreamySearchBar onSearchSubmit={handleSearch} />
        </div>

     
      </motion.div>

      {/* Floating Realities */}
      <div className="absolute inset-0 z-10 pointer-events-none">

        {realities.map((r, index) => (
          <button
            key={r.title}
            onClick={() => handleSearch(r.title)}
            className={`
              pointer-events-auto
              absolute
              ${r.pos}
              ${floatClasses[index]}

              w-64
              rounded-[28px]
              border border-white/10
              bg-black/20
              backdrop-blur-2xl

              p-5

              transition-all
            duration-500

            hover:-translate-y-3
            hover:scale-105

            hover:border-white/20
            hover:shadow-[0_0_80px_rgba(255,255,255,0.15)]
            `}
          >
            <div
              className={`
                absolute
                -inset-8
                -z-10
                rounded-full
                blur-[100px]

                ${
                  r.color === "amber"
                    ? "bg-amber-400/20"
                    : r.color === "cyan"
                    ? "bg-cyan-400/20"
                    : r.color === "yellow"
                    ? "bg-yellow-400/20"
                    : "bg-green-400/20"
                }
              `}
            />

            <div
              className={`
                mb-4
                h-24
                rounded-2xl

                ${
                  r.color === "amber"
                    ? "bg-gradient-to-br from-orange-400/20 to-red-500/20"
                    : r.color === "cyan"
                    ? "bg-gradient-to-br from-cyan-400/20 to-blue-500/20"
                    : r.color === "yellow"
                    ? "bg-gradient-to-br from-yellow-400/20 to-orange-500/20"
                    : "bg-gradient-to-br from-green-400/20 to-emerald-500/20"
                }
              `}
            />

            <h3 className="text-white font-semibold text-lg">
              {r.title}
            </h3>

            <p className="mt-1 text-sm text-white/50">
              {r.subtitle}
            </p>
          </button>
        ))}

      </div>
    </section>
  );
}