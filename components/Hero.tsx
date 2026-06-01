"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const suggestions = [
  { text: "Rome Never Fell", tag: "Alternate Past", sub: "Eternal Empire", color: "from-orange-500/20 to-red-500/20", glow: "bg-amber-400/10", shadow: "shadow-[0_0_30px_rgba(251,191,36,0.15)]" },
  { text: "AI Ruled Earth", tag: "Alternate Future", sub: "Machine Civilization", color: "from-cyan-500/20 to-blue-500/20", glow: "bg-cyan-400/10", shadow: "shadow-[0_0_30px_rgba(96,165,250,0.15)]" },
  { text: "India Colonized Britain", tag: "Featured Reality", sub: "Reversed Empire", color: "from-yellow-400/20 to-orange-500/20", glow: "bg-yellow-400/10", shadow: "shadow-[0_0_40px_rgba(250,204,21,0.15)]" },
  { text: "Dinosaurs Survived", tag: "Lost World", sub: "Lost Evolution", color: "from-green-500/20 to-emerald-500/20", glow: "bg-green-400/10", shadow: "shadow-[0_0_30px_rgba(34,197,94,0.15)]" },
];

export default function Hero() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  const handleExplore = (textToSubmit?: string) => {
    const finalPrompt = textToSubmit || prompt;
    if (!finalPrompt.trim()) return;

    const slug = finalPrompt
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    router.push(`/reality/${slug}`);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#050515] flex flex-col justify-end items-center pb-12 px-4 overflow-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/hero-world.png"
          alt="AltVerse World Background Map"
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050515] via-[#050515]/30 to-[#050515]/80 z-10" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 z-10" />
      </div>

      {/* 2. BRANDING HUB PLACED PERFECTLY BETWEEN NAV AND SEARCH */}
      <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl flex flex-col items-center text-center pointer-events-auto">
        {/* Cinematic Accent Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-md shadow-lg mb-4">
          <span className="text-yellow-400 animate-pulse">✨</span> Every "What If?" Creates A New Reality
        </div>

        {/* Scaled Structural Title Typography */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.3em] text-white uppercase select-none leading-none"
          style={{
            textShadow: "0 0 50px rgba(255,255,255,0.15), 0 0 20px rgba(99,102,241,0.2)",
          }}
        >
          ALTVERSE
        </h1>

        <p className="text-xs md:text-sm font-semibold tracking-[0.4em] text-indigo-300/80 uppercase max-w-xl mx-auto mt-4">
          Generate and Explore Alternate Realities
        </p>
      </div>

      {/* 3. THICK, WIDE, GLOWING DREAMY SEARCH PORTAL */}
      {/* Expanded scale width max-w-3xl for premium layout presence */}
      <div className="relative z-20 w-full max-w-3xl px-4 mb-16 group">
        
        {/* Layered Underglow Backdrops (The Dreamy Ambient Engine) */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-xl opacity-75 group-focus-within:opacity-100 group-focus-within:blur-2xl transition-all duration-500 pointer-events-none" />
        <div className="absolute inset-2 rounded-full bg-indigo-500/10 blur-md opacity-50 group-focus-within:opacity-80 transition-all duration-500 pointer-events-none" />

        {/* Main Translucent Glass Pill Container */}
        <div className="relative rounded-full border border-white/10 bg-slate-950/40 p-2.5 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(99,102,241,0.1)] focus-within:border-indigo-400/40 focus-within:shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(6,182,212,0.2)] transition-all duration-300">
          <div className="flex items-center relative">
            
            {/* Left Search Icon (Scaled and Enhanced Color Glow) */}
            <span className="absolute left-6 text-indigo-300/40 text-lg md:text-xl pointer-events-none transition-colors group-focus-within:text-cyan-300/70">
              🔍
            </span>

            {/* Thickened, High-Presence Input Workspace */}
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleExplore()}
              placeholder="What if India Colonized Britain?"
              className="w-full bg-transparent pl-14 pr-20 py-4 text-base md:text-lg text-white placeholder:text-white/20 outline-none font-light tracking-wide"
            />

            {/* Premium Interactive Action Submission Hex Trigger */}
            <button
              onClick={() => handleExplore()}
              className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-tr hover:from-white hover:to-indigo-50 hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] active:scale-95"
            >
              <span className="text-base font-semibold">✦</span>
            </button>

          </div>
        </div>
      </div>

      {/* 4. POPULAR FLOATING CARDS FRAMEWORK */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <div className="w-full border-t border-white/5 pt-6">
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
            Popular Realities
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center">
            {suggestions.map((card, idx) => (
              <button
                key={idx}
                onClick={() => handleExplore(card.text)}
                style={{
                  animation: `ui-float ${5 + idx}s ease-in-out infinite alternate`
                }}
                className={`
                  group relative w-full max-w-[195px] aspect-[4/5] rounded-[20px] 
                  border border-white/5 bg-slate-950/60 backdrop-blur-xl p-3.5
                  text-left flex flex-col justify-between overflow-hidden
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.02] hover:border-white/15
                  ${card.shadow}
                `}
              >
                <div className={`absolute inset-0 rounded-[20px] ${card.glow} blur-[20px] opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                <div className={`w-full h-20 rounded-xl bg-gradient-to-br ${card.color} border border-white/5 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 opacity-30 group-hover:opacity-0 transition-opacity" />
                </div>

                <div className="relative z-10 mt-2">
                  <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-indigo-400/80">
                    {card.tag}
                  </p>
                  <h3 className="mt-0.5 text-xs font-semibold text-white/95 tracking-wide leading-tight group-hover:text-white transition-colors">
                    {card.text}
                  </h3>
                  <p className="mt-0.5 text-[10px] font-light text-white/40 group-hover:text-white/60 transition-colors">
                    {card.sub}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}