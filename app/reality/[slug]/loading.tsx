"use client";

import LoadingMessage from "@/components/LoadingMessage";

export default function Loading() {
return ( <div className="relative min-h-screen overflow-hidden bg-[#050515] flex items-center justify-center">


  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)] animate-pulse" />

  {/* Floating Particles */}
  <div className="absolute top-[15%] left-[20%] text-cyan-300/40 animate-pulse">
    ✦
  </div>

  <div className="absolute top-[30%] right-[15%] text-purple-300/40 animate-pulse">
    ✦
  </div>

  <div className="absolute bottom-[20%] left-[25%] text-yellow-300/40 animate-pulse">
    ✦
  </div>

  <div className="absolute bottom-[25%] right-[20%] text-cyan-300/40 animate-pulse">
    ✦
  </div>

  <div className="relative z-10 text-center px-6 max-w-4xl">

    {/* Badge */}
    <div className="inline-flex mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
      AltVerse Engine
    </div>

    {/* Main Title */}
    <h1 className="text-5xl md:text-8xl font-black tracking-[0.15em] text-white">
      FORGING
      <br />
      REALITY
    </h1>

    <p className="mt-4 text-cyan-300/70 tracking-[0.3em] uppercase text-xs">
      Temporal Simulation Active
    </p>

    {/* Timeline */}
    <div className="mt-14 flex items-center justify-center gap-3">

      <div className="h-4 w-4 rounded-full bg-cyan-400 animate-pulse" />

      <div className="h-[2px] w-20 bg-cyan-400/30" />

      <div className="h-4 w-4 rounded-full bg-cyan-400 animate-pulse delay-150" />

      <div className="h-[2px] w-20 bg-cyan-400/30" />

      <div className="h-4 w-4 rounded-full bg-purple-400 animate-pulse delay-300" />

      <div className="h-[2px] w-20 bg-cyan-400/30" />

      <div className="h-4 w-4 rounded-full bg-yellow-400 animate-pulse delay-500" />

    </div>

    <div className="mt-3 flex justify-between max-w-md mx-auto text-xs tracking-widest text-white/30">
      <span>PAST</span>
      <span>PRESENT</span>
      <span>ALT REALITY</span>
    </div>

    {/* Dynamic Messages */}
    <LoadingMessage />

    {/* Progress Bar */}
    <div className="mt-12 max-w-md mx-auto overflow-hidden rounded-full bg-white/10 h-2">

      <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-[pulse_2s_ease-in-out_infinite]" />

    </div>

    <p className="mt-6 text-sm text-white/40">
      Reconstructing history and generating alternate outcomes...
    </p>

  </div>
</div>


);
}
